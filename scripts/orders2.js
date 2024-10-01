export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=location&_expand=food&_expand=drink&_expand=dessert")
    const orders = await fetchResponse.json()

    let ordersHTML  = '<article class="orderList">'

    ordersHTML += orders.map(
        (order) => {
            let orderPrice =order.food.price + order.drink.price + order.dessert.price

            // Round the orderPrice to 2 decimal places
            orderPrice = orderPrice.toFixed(2)

            //$ sign
            orderPrice = parseFloat(orderPrice).toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })

            
            let orderFood=order.food.name
            //add more here---------------------------------



            return `<section class="order card">
                    ${orderFood} 
                    

                    </section>`
        }
    ).join("") 

    ordersHTML += `</article>`

    return ordersHTML
}
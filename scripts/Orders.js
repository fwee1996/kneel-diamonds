export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=sizes&_expand=jewelryId")
    const orders = await fetchResponse.json()//return JS object that JS can read

    let ordersHTML = orders.map(
        (order) => {
            let orderPrice =order.metal.price + order.style.price + order.sizes.price
            if (order.jewelryId===1){orderPrice = orderPrice}
            else if(order.jewelryId===2){orderPrice =orderPrice *2}
            else if (order.jewelryId===3){orderPrice =orderPrice *4}

            // Round the orderPrice to 2 decimal places!!!!
            orderPrice = orderPrice.toFixed(2)

            return `<div>
                <input type='radio' name='order' value='${order.id}' /> Order#${order.id} costs $${orderPrice}
            </div>`
        }
    ).join("") // Convert the array of HTML strings into a single string!

    return ordersHTML
}

    
   


//Open Postman and request orders again using http://localhost:8088/orders?_expand=metal
//you see:[
//     {
//         "metalId": 3,
//         "sizeId": 1,
//         "styleId": 3,
//         "id": 2,
//         "metal": {
//             "id": 3,
//             "metal": "24K Gold",
//             "price": 1258.9
//         }
//     }
// ]
//You will now see all of the related objects for the order embedded in the response using: http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size
//update your component function code to fetch the orders with all foreign keys expanded to their full, related objects. Each order object will now have the prices of the chosen metal, size and style that the user made.
//Update your iteration code to add up the price of the metal, style, and size.
//const orderPrice = order.metal.price + order.style.price + order.size.price

//finally,

// `<div>Order #${order.id} cost ${orderPrice}</div>` in html string above
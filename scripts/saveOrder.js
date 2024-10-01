import { placeOrder } from "./TS.js"


     const handleCustomerOrderClick = (clickEvent) => {
        if (clickEvent.target.id === "saveOrder") {
            placeOrder()
        }
    }

export const placeOrder = () => {

    document.addEventListener("click", handleCustomerOrderClick)

    return "<div><button id='saveOrder'>Place Order</button></div>" 
     
}
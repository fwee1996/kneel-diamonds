import { placeOrder } from "./TransientState.js"


     const handleCustomOrderClick = (clickEvent) => {
        if (clickEvent.target.id === "saveCustomOrder") {
            placeOrder()
        }
    }

export const createCustomOrder = () => {

    document.addEventListener("click", handleCustomOrderClick)

    return "<div><button id='saveCustomOrder'>Create Custom Order</button></div>" 
     
}
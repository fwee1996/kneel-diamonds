import { MetalOptions } from './MetalOptions.js'
import { SizeOptions } from './SizeOptions.js'
import { StyleOptions } from './StyleOptions.js'
import { JewelryOptions } from './JewelryOptions.js'
import { createCustomOrder } from './SaveSubmission.js'
import { Orders } from './Orders.js'


const container = document.querySelector("#container")

const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const sizeOptionsHTML = await SizeOptions()
    const styleOptionsHTML = await StyleOptions()
    const jewelryOptionsHTML = await JewelryOptions()
    const buttonHTML= await createCustomOrder()
    const ordersHTML =await Orders()

    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
            ${sizeOptionsHTML} 
               
            </section>

            <section class="choices__styles options">
            ${styleOptionsHTML}
                
            </section>
        </article>

        <article class="jewelry">
        ${jewelryOptionsHTML}
        </article>

        <article class="order">
        ${buttonHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${ordersHTML}
        </article>
    `

    container.innerHTML = composedHTML
    
}

 document.addEventListener("newSubmissionCreated", render)//normally, ("click",--handler--here is render)

 render()

// document.addEventListener("newSubmissionCreated", event => {
//     console.log("State of data has changed. Regenerating HTML...")
//     render()
// })
import { foodOptions } from './foodOptions.js'


import { placeOrder } from './saveOrder.js'
import { Orders } from './orders2.js'


const container = document.querySelector("#container")

const render = async () => {
    const foodOptionsHTML = await foodOptions()
    

    const buttonHTML= await placeOrder()
    const ordersHTML =await Orders()

    const composedHTML = `
        <h1>Y'all Hungry?</h1>

        <article class="choices">

            <section class="choices__food options">
                ${foodOptionsHTML}
            </section>

            <section class="choices__drink options">
            
            </section>

            <section class="choices__dessert options">
            
            </section>

        </article>


        <article class="toTheRight">
        <section class="location">
            
        </section>

        
        <section class="orders">
            ${ordersHTML}
            ${buttonHTML}
        </section>

        </article>
    `

    container.innerHTML = composedHTML
    
}

 document.addEventListener("newSubmissionCreated", render)

 render()


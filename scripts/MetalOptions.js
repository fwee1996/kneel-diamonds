import { setMetalChoice } from "./TransientState.js"


const handleMetalChoice = (event) => {
    if (event.target.name === "metal") {
        setMetalChoice(parseInt(event.target.value))//see name in TS.js
    }
}

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals= await response.json()

    //debugger

    document.addEventListener("change", handleMetalChoice)

    let metalOptionsHTML ="<h2>Metals</h2>"

for (const metal of metals){
    metalOptionsHTML+=`<div><input type='radio' name='metal' value='${metal.id}'/> ${metal.metal}</div>`
}
//debugger
return metalOptionsHTML
}

//

//import the function into main, 
//invoke it to get the generated HTML and use innerHTML to inject the HTML into the DOM. 


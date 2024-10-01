import { setFoodChoice } from "./TS.js"


const handleFoodChoice = (event) => {
    if (event.target.id === "food") {
        setFoodChoice(parseInt(event.target.value))
    }
}

export const foodOptions = async () => {
    const response = await fetch("http://localhost:8088/foods") //check link!!!
    const foods= await response.json()

    //debugger

    document.addEventListener("change", handleFoodChoice)

    let foodOptionsHTML =""

    foodOptionsHTML +=`<select id="food">`
    foodOptionsHTML += `<option value="0">Food Items</option>`   

for (const food of foods){ //check name "foods"
    foodOptionsHTML+=`<option value="${food.id}">${food.name}</option>`
}

foodOptionsHTML+= `</select>`

//debugger
return foodOptionsHTML
}

import {  setJewelryId } from "./TransientState.js"

const handleJewelryChange = (changeEvent) => {
    if (changeEvent.target.name === "jewelry") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setJewelryId(convertedToInteger)//see name in TS.js
    }
}

export const JewelryOptions = async () => {
    const response = await fetch("http://localhost:8088/jewelries")
    const jewelries= await response.json()
    
  //debugger

   document.addEventListener("change", handleJewelryChange)

  let jewelryOptionsHTML =""


   // Use map() to generate new array of strings
    const divStringArray = jewelries.map(
        (jewelry) => {
          return `<div>
              <input type='radio' name='jewelry' value='${jewelry.id}' /> ${jewelry.type}
          </div>`
        }
    )

    // This function needs to return a single string, not an array of strings
    //remove const:
    jewelryOptionsHTML += divStringArray.join("")


    return jewelryOptionsHTML
}

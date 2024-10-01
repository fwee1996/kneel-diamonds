//TS.js stores user choices as they are made
//rmbr radio button=change event!
//user click option--target.name is value attribute of option
//event listener for radio input options

//initial state:
//Boolean values should default to false
//Integer values should defualt to 0
//String values should default to an empty string ""
const transientState={
    // "id": 1,---taken out bcs its tracked by json server
    metalId: 0,
    styleId: 0, //initial state that user can change
    sizesId: 0,
    jewelryId: 0
}

export const setMetalChoice = (chosenMetal) => {
    transientState.metalId=chosenMetal
    console.log(transientState)
}

export const setStyleId = (chosenStyle) => {
    transientState.styleId=chosenStyle
    console.log(transientState)
}

export const setSizeId = (chosenSize) => {
    transientState.sizesId=chosenSize
    console.log(transientState)
}

export const setJewelryId= (chosenJewelry) => {
    transientState.jewelryId=chosenJewelry
    console.log(transientState)
}

export const placeOrder= async()=>{
    const postOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"
    },body: JSON.stringify(transientState) //stringify the object transientState 
}
  // Send the transient state to your API
const response = await fetch ("http://localhost:8088/orders", postOptions) //rmbr async in fn declaration

//******//CUSTOM EVENT: go get the state when the state changes
        //go get the state when the state changes so you can see live changes on network tab in devTools
        const customEvent = new CustomEvent("newSubmissionCreated")
        document.dispatchEvent(customEvent)

}
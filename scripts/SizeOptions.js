import { setSizeId } from "./TransientState.js"

const handleSizeChange = (changeEvent) => {
    if (changeEvent.target.name === "size") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setSizeId(convertedToInteger)//see name in TS.js
    }
}

//http://localhost:8088--- this is port that host url, 8088 is port number
export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes= await response.json()
    
  //debugger

   document.addEventListener("change", handleSizeChange)

  let sizeOptionsHTML ="<h2>Sizes</h2>"


   // Use map() to generate new array of strings:    --can put await, or not, but good to do so
    const divStringArray = await sizes.map( 
        (size) => {
          return `<div>
              <input type='radio' name='size' value='${size.id}' /> ${size.carets}
          </div>`
        }
    )

    // This function needs to return a single string, not an array of strings
    //remove const:
    sizeOptionsHTML += divStringArray.join("")


    return sizeOptionsHTML
}




import { setStyleId } from "./TransientState.js"

const handleStyleChange = (changeEvent) => {
    if (changeEvent.target.name === "style") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setStyleId(convertedToInteger)//see name in TS.js
    }
}

export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles= await response.json()
    
    //debugger
  
     document.addEventListener("change", handleStyleChange)
  
    let styleOptionsHTML ="<h2>Styles</h2>"
   
    //use .map() to iterate instead of for-of loop(metals):
    const divStringArray=styles.map((style)=>{
        return `<div>
              <input type='radio' name='style' value='${style.id}' /> ${style.style}
          </div>`
    }
)
  //use .join to join all of the individual items in the array into a single string
    styleOptionsHTML += divStringArray.join("")


      return styleOptionsHTML
  }
  
  
import { useConvictions, getConvictions } from "./convictionProvider.js"


// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")

export const ConvictionSelect = () => {
  // Trigger fetching the API data and loading it into application state
  return fetch("https://criminals.glassdale.us/crimes")
  .then(getConvictions())
    .then( () => {
      // Get all convictions from application state
      const convictions = useConvictions()
      render(convictions)
    })
}

const render = () => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                useConvictions().map(convictionObject => {
                  const conviction = convictionObject.name
                  return `<option>${conviction}</option>`
                })
            }
        </select>
    `
}
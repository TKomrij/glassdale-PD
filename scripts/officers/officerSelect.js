import {useOfficers, getOfficers} from "./officerProvider.js"

const contentTarget = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("change", event => {
  if (event.target.id === "officerSelect") {
      // Get the name of the selected officer

      // Define a custom event
      const customEvent = new CustomEvent("officerSelected", {
          detail: {
              officerThatWasChosen: event.target.value
          }
      })

      // Dispatch event to event hub
      eventHub.dispatchEvent(customEvent)
  }
})

export const OfficerSelect = () => {
  // Trigger fetching the API data and loading it into application state
  getOfficers()
    .then( () => {
      // Get all convictions from application state
      const officers = useOfficers()
      render(officers)
    })
}

const render = () => {
  /*
      Use interpolation here to invoke the map() method on
      the convictionsCollection to generate the option elements.
      Look back at the example provided above.
  */
  contentTarget.innerHTML = `
      <select class="dropdown" id="officerSelect">
          <option value="0">Please select an officer...</option>
          ${
              useOfficers().map(officerObject => {
                return `<option value=${officerObject.id}>${officerObject.name}</option>`
              })
          }
      </select>
  `
}
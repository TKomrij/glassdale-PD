import { getCriminals, useCriminals } from './criminalProvider.js'
import {Criminal} from './criminal.js'
import { useConvictions } from '../convictions/convictionProvider.js'
import { useOfficers } from '../officers/officerProvider.js'
// import {associateAlibisHTMLgenerator} from './associatesComponent.js'


const criminalElement = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('crimeChosen', event => {
  // Use the property you added to the event detail.
  if (event.detail.crimeThatWasChosen !== "0"){
      /*
          Filter the criminals application state down to the people that committed the crime
      */

      const crimes = useConvictions()
      const crime = crimes.find( (crime) => crime.id === parseInt(event.detail.crimeThatWasChosen))

      const criminals = useCriminals()
      const matchingCriminals = criminals.filter( (criminal) => criminal.conviction === crime.name)
    
      render(matchingCriminals)

      /*
          Then invoke render() and pass the filtered collection as
          an argument
      */
  }
})


eventHub.addEventListener("officerSelected", event => {
  if(event.detail.officerThatWasChosen !== "0") {
  // How can you access the officer name that was selected by the user?
  // const officerName = event.???

  // How can you get the criminals that were arrested by that officer?
  
  const officers = useOfficers()
  const officer = officers.find((officer) => officer.id === parseInt(event.detail.officerThatWasChosen))

  const criminals = useCriminals()
  const matchingCriminals = criminals.filter( (criminal) => criminal.arrestingOfficer === officer.name)

  
  render(matchingCriminals)
          }
      }
  )


export const criminalList = () => {
  getCriminals().then( 
    () => {
      let perps = useCriminals()
            render(perps)
      
    }
  )
}

const render = (criminals) => {
  let criminalCards = []
  for (const perp of criminals) {
    criminalCards.push(Criminal(perp))
  }
  criminalElement.innerHTML = criminalCards.join("")
}

import { getCriminals, useCriminals } from './criminalProvider.js'
import {Criminal} from './criminal.js'
import { useConvictions } from '../convictions/convictionProvider.js'
import { useOfficers } from '../officers/officerProvider.js'
import {useFacilities, getFacilities} from '../facilities/facilityProvider.js'
import {useCriminalFacilities, getCriminalFacilities} from '../facilities/criminalFacilityProvider.js'
// import {associateAlibisHTMLgenerator} from './associatesComponent.js'


const criminalElement = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")


let criminals = []
let facilities = []
let criminalFacilities = []


export const criminalList = () => {
  getCriminals()
  .then(getFacilities)
  .then(getCriminalFacilities)
  .then(() => {
      criminals = useCriminals()
      facilities = useFacilities()
      criminalFacilities = useCriminalFacilities()

      render(criminals, facilities, criminalFacilities)
  })
}


const render = (criminalList) => {
  // Step 1 - Iterate all criminals
  criminalElement.innerHTML = criminalList.map(
      (criminalObject) => {
          // Step 2 - Filter all relationships to get only ones for this criminal
          const facilityRelationshipsForThisCriminal = criminalFacilities.filter(cf => cf.criminalId === criminalObject.id)

          // Step 3 - Convert the relationships to facilities with map()
          const matchingFacilities = facilityRelationshipsForThisCriminal.map(cf => {
              const matchingFacilityObject = facilities.find(facility => facility.id === cf.facilityId)
              return matchingFacilityObject
          })

          // Must pass the matching facilities to the Criminal component
          return Criminal(criminalObject, matchingFacilities)
      }
  ).join("")
}


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

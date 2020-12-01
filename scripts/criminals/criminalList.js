import { getCriminals, useCriminals } from './criminalProvider.js'
import {Criminal} from './criminal.js'

export const criminalList = () => {
  getCriminals().then( 
    () => {
      const contentElement = document.querySelector(".criminalsContainer")
      const allTheCriminals = useCriminals()
      for (const criminalObject of allTheCriminals) {
        const criminalHTML = Criminal(criminalObject)
      // Add to the existing HTML in the content element
      contentElement.innerHTML += criminalHTML
    }
    }
  )
}
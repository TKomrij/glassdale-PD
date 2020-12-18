import {criminalList} from './criminals/criminalList.js'
import {ConvictionSelect} from './convictions/convictionSelect.js'
import { OfficerSelect } from './officers/officerSelect.js'
import { NoteForm } from './notes/noteForm.js'
import { ShowNoteButton } from './notes/showNotesButton.js'
import "./criminals/associatesComponent.js"
import "./notes/noteList.js"
import "./criminals/associatesComponent.js"



criminalList()
ConvictionSelect()
OfficerSelect()
NoteForm()
ShowNoteButton()



// What feature are we implementing?
// Filter our criminals by the crimes committed


// What tasks do we need to complete to implement the feature?
// 1. Filter through the criminals data by matching the crime that has been selected 
// 2. listen for the slection of a crime and capture the chosen value
// 3. Use the selected value to filter the criminal data
// 4. Update the DOM with the filtered criminal data


// Which modules are involved?
// 1. criminalList
// 2. convictionSelect

// Alibis ( ch 8 )
// Add a button to Criminal (HTML converter ) component
// Add new component to display known associates: AssociatesDisplay
//       job: create HTML rep of associates and alibis
// Dispatch custom event from Criminal.js to alert other modules that the associates btn has been clicked
// Listen for knownAssociatesClicked event on AssociatesDisplay
// Associates Display component needs to find the criminal with the matching id
// Loop over the found criminal's known_associates array and display them

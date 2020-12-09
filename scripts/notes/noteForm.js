import {saveNote} from './noteProvider.js'

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")



// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        // need to gather the data from the form
        const author = document.querySelector("#author").value
        const text = document.querySelector("#text").value
        const suspect = document.querySelector("#suspect").value


        // Make a new object representation of a note
        const newNote = {
            author: author,
            text: text,
            suspect: suspect,
            timestamp: Date.now()
        }

        // Change API state and application state
        saveNote(newNote)
    }
})



// send the data to be stored in the db, via the api
const render = () => {
    contentTarget.innerHTML = `
    <div class="noteForm">
        <input type="text" id="author" placeholder="author name">
        <textarea id="text" placeholder="note text"></textarea>
        <input type="text" id="suspect" placeholder="suspect name">
        <button id="saveNote">Save Note</button>
    </div>
    `
}

export const NoteForm = () => {
    render()
}
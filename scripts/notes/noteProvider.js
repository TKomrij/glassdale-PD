const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
  const noteStateChangedEvent = new CustomEvent("noteStateChanged")

  eventHub.dispatchEvent(noteStateChangedEvent)
}

let notes = []
const getNotes = () => {
  return fetch('http://localhost:8088/notes')
      .then(response => response.json())
      .then(parsedNotes => {
          notes = parsedNotes
      })

}

export const saveNote = note => {
  return fetch('http://localhost:8088/notes', {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(note)
  })
  .then(getNotes)
  .then(dispatchStateChangeEvent)
}

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveNote") {
    // const author = 
    // const text = 
    // const suspect = 
      // Make a new object representation of a note
      const newNote = {
        author: author,
        text: text,
        suspect: suspect

          // Key/value pairs here
      }

      // Change API state and application state
      saveNote(newNote)
  }
})

const NoteForm = () => {
  // rest of the code here
}
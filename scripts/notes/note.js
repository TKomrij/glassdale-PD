export const NoteHTMLConverter = (noteObject) => {
  return `
      <section class="note">
          <div class="note__title">Suspect: ${ noteObject.criminalName }</div>
          <div class="note__text">Note: ${ noteObject.text }</div>
          <div class="note__author">Author: ${ noteObject.author }</div>
          <div class="note__timestamp">Timestamp: ${ new Date(noteObject.timestamp).toLocaleDateString('en-US')  }</div>
      </section>
  `
}

// change suspect text input to dropdown select of API criminals
  // make a select element and populate it with all of the criminals
  // change the HTML representation of our form
  // event listener to listen for dropdown change/select (maybe)
  // change how the note is saved to capture the criminalId
  // modules to refactor:
    // NoteForm
    // Note
    // NoteList
    // Notes.json

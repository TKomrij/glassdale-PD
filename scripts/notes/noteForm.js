const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    contentTarget.innerHTML = `
        <input type="text" id="author"></input>
        <textarea id="text"></textarea>
        <input type="text" id="suspect"></input>
        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}
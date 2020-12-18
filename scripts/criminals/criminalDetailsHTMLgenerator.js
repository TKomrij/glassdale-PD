export const CriminalDetailsHTMLgenerator = (criminal) => {
  return `
  <div class="criminal-details">
    <div class="criminal-details__closeButtonContainer">
      <button id="closeModal">Close</button>
    </div>
    <p class="criminal-details__name">${criminal.known_associates.name}</p>
    <p class="criminal-details__location bold">${criminal.known_associates.alibi}</p>
  </div>
  `
}

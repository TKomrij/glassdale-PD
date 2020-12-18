import { getCriminals, useCriminals } from "./CriminalProvider.js";

const eventHub = document.querySelector('.container');
const targetDialog = document.querySelector('.dialog-container');

eventHub.addEventListener('dialogueClicked', (event) => {
  const criminals = useCriminals();
  const criminalToDetail = event.detail.criminalId;
  const criminalObject = criminals.find((criminal)=>criminal.id === parseInt(criminalToDetail));
  
  const attractionHTML = CriminalDetailsHTMLgenerator(criminalObject);
  targetDialog.innerHTML = attractionHTML;
  targetDialog.classList.add('criminal-dialog');
  targetDialog.showModal();
});

eventHub.addEventListener('click', (event)=> {
  if (event.target.id === 'closeModal') {
    targetDialog.close();
    targetDialog.classList.remove('criminal-dialog');
  }
})

window.onclick = function(event) {
  if (event.target === targetDialog)
    targetDialog.close();
}
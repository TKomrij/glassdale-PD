import { getCriminals, useCriminals } from "./CriminalProvider.js";

const eventHub = document.querySelector('.container');
eventHub.addEventListener('associatesChosen', evt => {
  const criminalId = evt.detail.criminalId;
  getCriminals();
  const criminals = useCriminals();
  const chosenCriminal = criminals.find(c => c.id === criminalId);
  openDialog(chosenCriminal.known_associates);
});

eventHub.addEventListener('click', evt => {
  if (evt.target.id === 'close-associate-dialog' ||
    evt.target.classList.contains('associate-dialog')) {
    closeDialog();
  }
})
window.addEventListener('keydown', evt => {
  if (evt.key === 'Escape') {
    closeDialog();
  }
});


const closeDialog = () => {
  const container = document.querySelector('.dialog-container');
  container.innerHTML = "";
};

const openDialog = (associates) => {
  const container = document.querySelector('.dialog-container');
  container.innerHTML = AssociateDialog(associates);
};


const AssociateDialog = (associates) => {
  return `
    <section class="associate-dialog">
      <div class="associate-dialog__body">
        <h1>Known Associates</h1>
        <div class="associate-dialog__list">
          ${associates.map(ass => AssociateCard(ass)).join("")}
        </div>
          <button id="close-associate-dialog">Close</button>
      </div>
    </section>
  `;
};

const AssociateCard = (associate) => {
  return `
    <div class="associate-dialog__card">
      <div class="associate-dialog__name"> ${associate.name} </div>
      <div class="associate-dialog__alibi"> ${associate.alibi} </div>
    </div>
  `;
};




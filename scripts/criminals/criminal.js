const eventHub = document.querySelector(".container")


eventHub.addEventListener('click', evt => {
  if (!evt.target.id.startsWith('associates--')) {
    return;
  }

  const idParts = evt.target.id.split('--');
  const criminalId = parseInt(idParts[1]);

  eventHub.dispatchEvent(new CustomEvent('associatesChosen', {
    detail: { criminalId }
  }));
});


export const Criminal = (criminal) => {
  return `
  <section class="criminal">
    <h3 class="criminalName">${criminal.name}</h3>
    <ul class="criminalList">
      <li class="criminalAge">Age: ${criminal.age}</li>
      <li class="criminalCrime">Crime: ${criminal.conviction}</li>
      <li class="criminalTermStart">Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</li>
      <li class="criminalTermEnd">Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</li>
    </ul>
    <div class="associates">
      <button id="associates--${criminal.id}">Associate Alibis</button>
    </div>
  </section>
  `
}

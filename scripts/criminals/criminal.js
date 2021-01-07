const eventHub = document.querySelector(".container");
const targetListContainer = document.querySelector(".dialogue-container");


export const Criminal = (criminal, facilities) => {
  return `
  <section class="criminal">
    <h3 class="criminalName">${criminal.name}</h3>
    <ul class="criminalList">
      <li class="criminalAge">Age: ${criminal.age}</li>
      <li class="criminalCrime">Crime: ${criminal.conviction}</li>
      <li>Arresting Officer: ${criminal.arrestingOfficer}</li>
      <li class="criminalTermStart">Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</li>
      <li class="criminalTermEnd">Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</li>
    </ul>
    <div>
      <h3 class="facilityName">Facilities</h3>
        <ul class="facilityList">
          ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
        </ul>
    </div>
    <div class="associates">
      <button id="associates--${criminal.id}">Associate Alibis</button>
    </div>
  </section>
  `
}


/*
 *  Listens for a "click" event and dispatches the custom event, assiciatesButtonClicked,
 *  to the eventHub to open a dialog box with a list of known associates and a corresponding alibi.
*/
targetListContainer.addEventListener("click", e => {
      if (e.target.id.startsWith("associates--")) {
          const [prefix, chosenCriminalId] = e.target.id.split("--");
          const openDialogBox = new CustomEvent("assiciatesButtonClicked", {
              detail: {
                  criminal: chosenCriminalId
              }
          });
          eventHub.dispatchEvent(openDialogBox);
      };
  });
/*
*   Listens for a "click" event listener on the button element that starts with (#hideCriminal--),
*   which sets the corresponding criminal card to display: none, by adding the class "hidden".
*/
targetListContainer.addEventListener("click", e => {
  if (e.target.id.startsWith("hideCriminal--"))
      e.target.parentElement.remove();
});

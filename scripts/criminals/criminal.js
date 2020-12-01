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
  </section>
  `
}
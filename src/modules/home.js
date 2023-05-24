// const btnComments = document.getElementById('btnComments');
// const btnReservations = document.getElementById('btnReservations');

// let array = [];

// document.addEventListener('DOMContentLoaded', async () => {
//   array = await getPokemon();
//   createCards(array);
// });

// btnComments.addEventListener('click', () => {
// });

// btnReservations.addEventListener('click', () => {
// });

// export { btnComments, btnReservations };

const createHome = async (array) => {
  const gridContainer = document.querySelector('.grid-container');

  const template = document.querySelector('#template-grid-item').content;
  const fragment = document.createDocumentFragment();

  array.forEach((element) => {
    template.querySelector('.img-pokemon').textContet = element.picture;
    template.querySelector('.name-pokemon').textContet = element.name;
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
  });

  gridContainer.appendChild(fragment);
};

export default createHome;

// <template id="template-grid-item">
//   <div class="grid-item">
//     <div><img class="img-pokemon" src="../images/bulbasaur.png" alt="Imagen 1"/></div>
//       <div class="description">
//          <p class="name-pokemon">Name.</p>
//           <div class="likes">
//            <i class="fa-regular fa-heart"></i>
//            <div class="count-likes">
//            <p>n</p>
//            <p>likes</p>
//            </div>
//           </div>
//           </div>
//      <button id="btnComments" class=".seePokemon">Comments</button>
//      <button id="btnReservations">Reservations</button>
//         </div>
// </template>
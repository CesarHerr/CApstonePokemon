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

// const createHome = async (array) => {
//   const gridContainer = document.querySelector('.grid-container');

//   const template = document.querySelector('#template-grid-item').content;
//   const fragment = document.createDocumentFragment();

//   array.forEach((element) => {
//     template.querySelector('.img-pokemon').textContet = element.picture;
//     template.querySelector('.name-pokemon').textContet = element.name;
//     const clone = template.cloneNode(true);
//     fragment.appendChild(clone);
//   });

//   gridContainer.appendChild(fragment);
// };

// export default createHome;

const urlAPI = "https://pokeapi.co/api/v2/pokemon";

const createHome = async () => {
  try {
    const response = await fetch(`${urlAPI}`);
    const data = await response.json();
    console.log(data.results)
    
    displayScores(data.results)
  } catch (error) {
    alert("Errooooooor");
  }
};

const main = document.querySelector('header');
const list = document.createElement('div');
list.classList.add('pokeGroup');
main.insertAdjacentElement('afterEnd', list)

const displayScores = (data) => {
    list.innerHTML = data
      .map(
        (data, index) => `
        <div>
          <h2>${data.name}</h2>
          <img class ="indexPokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg"></img>
          <button class="seePokemon" data-index=${index + 1}>comments</button>
        </diV>
      `,
      )
      .join('');
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
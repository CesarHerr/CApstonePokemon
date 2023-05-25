import likes from './likes.js';

const urlAPI = 'https://pokeapi.co/api/v2/pokemon';



const createHome = async () => {
  try {
    const response = await fetch(`${urlAPI}`);
    const data = await response.json();
    // eslint-disable-next-line no-console
    console.log(data.results);

    // eslint-disable-next-line no-use-before-define
    displayScores(data.results);
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert('Errooooooor');
  }
};

const main = document.querySelector('header');
const list = document.createElement('div');
list.classList.add('pokeGroup');
main.insertAdjacentElement('afterEnd', list);

const displayScores = (data) => {
  list.innerHTML = data.map(
    (data, index) => `
      <div class="grid-item">
        <div><img class="indexPokemon size" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg"></img></div>
          <div class="description">
          <h2>${data.name}</h2>
          <div class="likes">
            <i class="fa-regular fa-heart like" id=${}></i>
            <div class="count-likes">
              <p>n</p>
              <p> ${}likes</p>
            </div>
          </div>
          </div>
          <button class="seePokemon" data-index=${index + 1}>comments</button>
          <button id="btnReservations">Reservations</button>
      </div>
      `,
  )
    .join('');
};

export default createHome;
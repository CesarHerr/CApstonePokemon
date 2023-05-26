import pokeCounter from './counterPokemon.js';

const urlAPI = 'https://pokeapi.co/api/v2/pokemon';

const createHome = async () => {
  try {
    const response = await fetch(`${urlAPI}`);
    const data = await response.json();
    // eslint-disable-next-line no-use-before-define
    displayScores(data.results);
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert('Errooooooor');
  }
};

const fetchLikes = async (index) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4fC4h2xqQOQaR0Thy8n4/likes/');
  const dataLikes = await response.json();

  let countLike = 0;

  const filteredLikes = dataLikes.filter((like) => like.item_id === index);
  if (filteredLikes.length > 0 && filteredLikes[0].likes) {
    countLike = filteredLikes[0].likes;
  }

  console.log(countLike);
  const sumLikes = document.getElementById(index);
  sumLikes.innerHTML = countLike;
};

const main = document.querySelector('header');
const list = document.createElement('div');
list.classList.add('pokeGroup');
main.insertAdjacentElement('afterEnd', list);

const putCounter = document.querySelector('ul');
const pokemonCounter = document.createElement('p');
pokemonCounter.id = 'countPokemon';
putCounter.insertAdjacentElement('afterBegin', pokemonCounter);

const displayScores = async (data) => {
  list.innerHTML = data.map(
    (data, index) => `
      <div class="grid-item">
        <div><img class="indexPokemon size" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg"></img></div>
          <div class="description">
          <h2>${data.name}</h2>
          <div class="likes">
            <i class="fa-regular fa-heart like" data-id=${index + 1}></i>
            <div class="count-likes">
              <p class='sum_Likes' id=${index + 1}></p>
              <p>likes</p>
            </div>
          </div>
          </div>
          <button class="seePokemon" data-index=${index + 1}>comments</button>
          <button class="reservePokemon" data-index=${index + 1}>Reservations</button>
      </div>
      `,
  )
    .join('');

  const totalPokemon = await pokeCounter(list);
  document.getElementById('countPokemon').innerHTML = totalPokemon;

  for (let i = 0; i <= data.length - 1; i += 1) {
    const index = Number(i) + 1;
    fetchLikes(index);
  }
};

export { createHome, fetchLikes };
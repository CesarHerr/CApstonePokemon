import { addComment, userComments } from './Comments.js';

const main = document.querySelector('body');

const urlAPI = 'https://pokeapi.co/api/v2/pokemon';

// create popup with API information
const createPopup = (pokeInfo) => {
  const cards = document.createElement('div');
  cards.className = 'background';
  cards.innerHTML = `
      <div class="popup-container">
        <div class="cardPopup">
          <span class="material-symbols-outlined close">close</span>      
          <div class="popup-header">
            <h2>${pokeInfo.name}</h2> 
            <img class="pokeImage" src="${pokeInfo.img}" alt="pokeball logo">        
            <ul class="popup-skills">
              <li><b>Type</b> : ${pokeInfo.type}</type>
              <li><b>Ability</b> : ${pokeInfo.ability} </li>
              <li><b>Weight</b> : ${pokeInfo.weight} kg.</li>
              <li><b>Height</b> : ${pokeInfo.height} mts.</type>            
            </ul>
            <h3>Comments</h3><p id="count"></p>
            <ul class="comments-list"></ul>
          </div>
          <div class="cardPopup__form">
            <h2>Add a Comment</h2>
            <form>
              <input class='username' type="text" name="username" placeholder="Your Name" required>
              <textarea class='comment'  placeholder="Your comments" maxlength="100" required></textarea>
              <button class="commentButton" data-index="${pokeInfo.id}">Go</button>
            </form>
          </div>      
        </div>
      </div>`;

  main.insertAdjacentElement('afterBegin', cards);
  const close = document.querySelector('.close');
  const zIndex = document.querySelector('.pokeGroup');
  zIndex.classList.toggle('z-index');
  main.style.overflow = 'hidden';
  close.addEventListener('click', () => {
    main.removeChild(cards);
    zIndex.classList.toggle('z-index');
    main.style.overflow = 'auto';
  });

  const commentBtn = document.querySelector('.commentButton');

  // Add comment event
  commentBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const { index } = event.target.dataset;
    const takeUser = document.querySelector('.username').value;
    const takeComment = document.querySelector('.comment').value;

    if (takeUser && takeComment) {
      await addComment(index, takeUser, takeComment);
      document.querySelector('.comment').value = '';
      document.querySelector('.username').value = '';
    }
  });
};

// fetch API
const getPokemon = async (id) => {
  try {
    const response = await fetch(`${urlAPI}/${id}`);
    const data = await response.json();
    const abilities = data.abilities[0];
    const pokeInfo = {
      img: data.sprites.other.dream_world.front_default,
      name: data.forms[0].name[0].toUpperCase() + data.forms[0].name.substring(1),
      ability: abilities.ability.name[0].toUpperCase() + abilities.ability.name.substring(1),
      weight: (data.weight * 0.1).toFixed(1),
      height: (data.height * 0.1).toFixed(1),
      type: data.types[0].type.name[0].toUpperCase() + data.types[0].type.name.substring(1),
      id,
    };
    createPopup(pokeInfo);
  } catch (error) {
    alert('error.message');
  }
};

// Show Popup event
const getPokeInfo = () => {
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('seePokemon')) {
      const { index } = event.target.dataset;
      getPokemon(index);
      userComments(index);
    }
  });
};

export default getPokeInfo;
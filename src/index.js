import './style.css';
import getPokeInfo from './modules/popup.js';
import createHome from './modules/home.js';

// import getPokemon from './modules/apiPokemon.js';

getPokeInfo();
createHome();

const like = document.querySelector('.like');

like.addEventListener('click', () => { 
  like.classList.toggle('active');
  console.log('like');
});
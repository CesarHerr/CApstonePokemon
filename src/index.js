import './style.css';
import createHome from './modules/home.js';
import getPokemon from './modules/apiPokemon.js';

let array = [];

document.addEventListener('DOMContentLoaded', async () => {
  array = await getPokemon();
  createHome(array);
});
getPokemon();
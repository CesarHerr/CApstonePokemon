import './style.css';
import './assets/logo.png';
import getPokeInfo from './modules/popup.js';
import { createHome } from './modules/home.js';
import openCard from './modules/reservePokemon.js';
import likes from './modules/likes.js';

document.addEventListener('DOMContentLoaded', async () => {
  getPokeInfo();
  createHome();
  openCard();
});

document.querySelector('body').addEventListener('click', (e) => {
  if (e.target.matches('.like')) {
    likes(e);
  }
});
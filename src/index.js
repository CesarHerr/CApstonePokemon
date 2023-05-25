import './style.css';
import './assets/logo.png'; 
import getPokeInfo from './modules/popup.js';
import createHome from './modules/home.js';
import likes from './modules/likes.js';

document.addEventListener('DOMContentLoaded', async () => {
  getPokeInfo();
  createHome();
});

document.querySelector('body').addEventListener('click', (e) => {
  if (e.target.matches('.like')) {
    likes(e);
    const text = e.target.parentElement.children[1].children[0].innerText;
    const number = Number(text.slice(0, text.length - 6));
    e.target.parentElement.children[1].children[0].innerText = `${number + 1}${text.slice(text.length - 6, text.length)}`;
  }
});
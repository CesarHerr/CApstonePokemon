import './style.css';

const btn3 = document.createElement("button");
btn3.classList.add("seePokemon");
btn3.dataset.index = 130;
btn3.innerText = "poke3";

const btn1 = document.createElement("button");
btn1.classList.add("seePokemon");
btn1.dataset.index = 150;
btn1.innerText = "poke1";

const btn2 = document.createElement("button");
btn2.classList.add("seePokemon");
btn2.dataset.index = 140;
btn2.innerText = "poke2";

const main = document.querySelector("header");
main.appendChild(btn1);
main.appendChild(btn2);
main.appendChild(btn3);

const urlAPI = "https://pokeapi.co/api/v2/pokemon";

const getPokemon = async (id) => {
  try {
    const response = await fetch(`${urlAPI}/${id}`);
    const data = await response.json();
    
    const pokeInfo = {
      img: data.sprites.other.dream_world.front_default,
      name: data.forms[0].name,
      ability: data.abilities[0].ability.name,
      weight: data.weight,
    };

    createPopup(pokeInfo);
  } catch (error) {
    alert('Errorrrrrrrrrrrr');
  }
};

const pokeButton = document.querySelectorAll(".seePokemon");

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("seePokemon")) {
    const index = event.target.dataset.index;
    getPokemon(index);
  }
});

const createPopup = (pokeInfo) => {
  const cards = document.createElement("div");
      cards.className = "popup-container";
      cards.innerHTML = `
      <div class="cardPopup">
      <span class="material-symbols-outlined close">close</span>      
          <div class="popup-header">
              <h2>${pokeInfo.name}</h2> 
              <img class="pokeImage" src="${pokeInfo.img}" alt="pokeball logo">        
              <ul class="popup-skills">
                  <li>Ability : ${pokeInfo.ability} </li>
                  <li>Weight : ${pokeInfo.weight}</li>
              </ul>
          </div>
          <div class="cardPopup__form">
            <h2>Add a Comment</h2>
            <form>
                <input type="text" name="username" placeholder="Your Name" required><br>
                <textarea id="text-area" placeholder="Your comments" maxlength="300" name="message" required></textarea> <br>
                <button class="comentBtn">Go</button>
            </form>
        </div>      
      </div>`;

      main.appendChild(cards);
      const close = document.querySelector(".close");
      close.addEventListener("click", () => {
        main.removeChild(cards);
      });
    };
  


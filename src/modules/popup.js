const btn3 = document.createElement("button");
btn3.classList.add("seePokemon");
btn3.dataset.index = 7;
btn3.innerText = "poke3";

const btn1 = document.createElement("button");
btn1.classList.add("seePokemon");
btn1.dataset.index = 2;
btn1.innerText = "poke1";

const btn2 = document.createElement("button");
btn2.classList.add("seePokemon");
btn2.dataset.index = 10;
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
      name: data.forms[0].name[0].toUpperCase() + data.forms[0].name.substring(1),
      ability: data.abilities[0].ability.name[0].toUpperCase() + data.abilities[0].ability.name.substring(1),
      weight: (data.weight * 0.1).toFixed(1),
      height: (data.height * 0.1).toFixed(1),
      type: data.types[0].type.name[0].toUpperCase() + data.types[0].type.name.substring(1)

    };
    createPopup(pokeInfo);
  } catch (error) {
    alert("Error");
  }
};

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
            <li>Type : ${pokeInfo.type}</type>
            <li>Ability : ${pokeInfo.ability} </li>
            <li>Weight : ${pokeInfo.weight} kg.</li>
            <li>height : ${pokeInfo.height} mts.</type>            
          </ul>
        </div>
        <div class="cardPopup__form">
          <h2>Add a Comment</h2>
          <form>
            <input type="text" name="username" placeholder="Your Name" required>
            <textarea id="text-area" placeholder="Your comments" maxlength="400" name="message" required></textarea>
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

const getPokeInfo = () => {
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("seePokemon")) {
      const index = event.target.dataset.index;
      getPokemon(index);
    }
  });
};

export default getPokeInfo;
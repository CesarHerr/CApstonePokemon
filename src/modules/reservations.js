const urlAPI = 'https://pokeapi.co/api/v2/pokemon';
const main = document.querySelector('header');

const createPopupWindow = (poke) => {
  const cards = document.createElement('div');
  cards.className = 'pokemon-card';
  cards.innerHTML = `
    <div class="pokemon-card__image">
        <img src="${poke.img}" alt="Imagen" class="pokemon-card__image">
        <span class="material-symbols-outlined close">close</span>
    </div>
    <h2 class="pokemon-card__title">${poke.name}</h2>
    <div class="columns">
        <div class="column">
            <p class="pokemon-card__info">Ability: ${poke.ability}</p>
            <p class="pokemon-card__info">Moves: ${poke.moves}</p>
        </div>
        <div class="column">
            <p class="pokemon-card__info">Height: ${poke.height} "</p>
            <p class="pokemon-card__info">Weight: ${poke.weight} lbs</p>
        </div>
    </div>
    <h3 class="pokemon-card__section-title">Reservations</h3><br>
    <div class="reservations-container">
    </div>
    <div class="input-container">
        <h3 class="pokemon-card__section-title">Add a reservation</h3><br>
        <input type="text" id="nameInput" placeholder="Name" class="pokemon-card__input" required>
        <input type="date" id="startDateInput" placeholder="Start date" class="pokemon-card__input" required>
        <input type="date" id="endDateInput" placeholder="End date" class="pokemon-card__input" required>
        <button class="pokemon-card__button">Reserve</button>
    </div>`;

  main.appendChild(cards);

  const close = cards.querySelector('.close');
  close.addEventListener('click', () => {
    main.removeChild(cards);
  });
};

const fetchData = async (id) => {
  try {
    const res = await fetch(`${urlAPI}/${id}`);
    const data = await res.json();

    const poke = {
      img: data.sprites.other.dream_world.front_default,
      name: data.forms[0].name,
      ability: data.abilities[0].ability.name,
      moves: data.moves[0].move.name,
      height: data.height,
      weight: data.weight,
    };

    createPopupWindow(poke);
  } catch (error) {
    alert(error);
  }
};

const handleButtonClick = (event) => {
  if (event.target.classList.contains('seePokemon')) {
    const { index } = event.target.dataset;
    fetchData(index);
  }
};

const handleReservationButton = (event) => {
  if (event.target.classList.contains('pokemon-card__button')) {
    const nameInput = document.getElementById('nameInput');
    const startDateInput = document.getElementById('startDateInput');
    const endDateInput = document.getElementById('endDateInput');

    const name = nameInput.value;
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;

    const reservationParagraph = document.createElement('p');
    reservationParagraph.classList.add('pokemon-card__reservation');
    reservationParagraph.textContent = `${startDate} - ${endDate} by ${name}`;

    const reservationsContainer = document.querySelector('.reservations-container');
    reservationsContainer.appendChild(reservationParagraph);
  }
};

main.addEventListener('click', handleButtonClick);
main.addEventListener('click', handleReservationButton);

export default fetchData;

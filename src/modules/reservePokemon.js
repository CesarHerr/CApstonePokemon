import reservationCounter from './reservationCounter';

const main = document.querySelector('header');
const urlAPI = 'https://pokeapi.co/api/v2/pokemon';
const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

const createPokemonCard = (poke, reservations) => {
  const card = document.createElement('div');
  card.className = 'background';
  card.innerHTML = `
    <div class="pokemon-card">
      <div class="pokemon-card__image">
        <img src="${poke.img}" alt="Imagen" class="pokemon-card__image">
        <span class="material-symbols-outlined close">close</span>
      </div>
      <h2 class="pokemon-card__title">${poke.name}</h2>
      <div class="columns">
        <div class="column">
          <p class="pokemon-card__info">Ability: ${poke.ability}</p>
          <p class="pokemon-card__info">Type: ${poke.type} </p>
        </div>
        <div class="column">
          <p class="pokemon-card__info">Height: ${poke.height}"</p>
          <p class="pokemon-card__info">Weight: ${poke.weight} lbs</p>
        </div>
      </div>
      <h3 class="pokemon-card__section-title">Reservations<p id="counterReserve"></p></h3><br>
      <div class="reservations-container"></div>
      <div class="input-container">
        <h3 class="pokemon-card__section-title add-reservation">Add a reservation</h3><br>
        <input type="text" id="nameInput" placeholder="Name" class="pokemon-card__input" required>
        <input type="date" id="startDateInput" placeholder="Start date" class="pokemon-card__input" required>
        <input type="date" id="endDateInput" placeholder="End date" class="pokemon-card__input" required>
        <button class="pokemon-card__button">Reserve</button>
      </div>
    </div>`;

  reservations.forEach((reservation) => {
    const reservationParagraph = document.createElement('p');
    reservationParagraph.classList.add('pokemon-card__reservation');
    reservationParagraph.textContent = `${reservation.date_start} - ${reservation.date_end} by ${reservation.username}`;

    const reservationsContainer = card.querySelector('.reservations-container');
    reservationsContainer.appendChild(reservationParagraph);
  });

  const zIndex = document.querySelector('.pokeGroup');
  zIndex.classList.toggle('z-index');
  document.body.style.overflow = 'hidden';

  const time = () => {
    const reservationsContainer = card.querySelector('.reservations-container');
    const reservation = reservationCounter(reservationsContainer);
    document.getElementById('counterReserve').innerHTML = reservation;
  };

  setTimeout(time, 1000);

  main.appendChild(card);

  const close = card.querySelector('.close');
  close.addEventListener('click', () => {
    zIndex.classList.toggle('z-index');
    document.body.style.overflow = 'auto';
    main.removeChild(card);
  });

  const reservationButton = card.querySelector('.pokemon-card__button');
  reservationButton.addEventListener('click', async () => {
    const nameInput = card.querySelector('#nameInput');
    const startDateInput = card.querySelector('#startDateInput');
    const endDateInput = card.querySelector('#endDateInput');

    const name = nameInput.value;
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;

    if (name && startDate && endDate) {
      try {
        const reservationData = {
          item_id: poke.id,
          username: name,
          date_start: startDate,
          date_end: endDate,
        };

        const response = await fetch(`${baseURL}apps/y1yEz5VVvf2hcqVcChfJ/reservations/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(reservationData),
        });

        if (response.status === 201) {
          const reservationParagraph = document.createElement('p');
          reservationParagraph.classList.add('pokemon-card__reservation');
          reservationParagraph.textContent = `${startDate} - ${endDate} by ${name}`;

          const reservationsContainer = card.querySelector('.reservations-container');
          reservationsContainer.appendChild(reservationParagraph);

          nameInput.value = '';
          startDateInput.value = '';
          endDateInput.value = '';
        } else {
          throw new Error('Failed to create reservation');
        }
      } catch (error) {
        alert(error.message);
      }
    }
    setTimeout(time, 1000);
  });
};

// eslint-disable-next-line consistent-return
const getReservations = async (id) => {
  try {
    const response = await fetch(`${baseURL}apps/y1yEz5VVvf2hcqVcChfJ/reservations/?item_id=${id}`);
    if (response.ok) {
      const reservations = await response.json();
      return reservations;
    }
    throw new Error('Failed to fetch reservations');
  } catch (error) {
    console.error(error);
  }
};

const openReservation = async (id) => {
  try {
    const response = await fetch(`${urlAPI}/${id}`);
    const data = await response.json();
    const abilities = data.abilities[0];
    const poke = {
      img: data.sprites.other.dream_world.front_default,
      name: data.forms[0].name[0].toUpperCase() + data.forms[0].name.substring(1),
      ability: abilities.ability.name[0].toUpperCase() + abilities.ability.name.substring(1),
      weight: (data.weight * 0.1).toFixed(1),
      height: (data.height * 0.1).toFixed(1),
      type: data.types[0].type.name[0].toUpperCase() + data.types[0].type.name.substring(1),
      id,
    };

    const reservations = await getReservations(id);

    if (reservations && reservations.length > 0) {
      createPokemonCard(poke, reservations);
    } else {
      createPokemonCard(poke, []);
    }
  } catch (error) {
    alert(error.message);
  }
};

const openCard = () => {
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('reservePokemon')) {
      const { index } = event.target.dataset;
      openReservation(index);
    }
  });
};

export default openCard;
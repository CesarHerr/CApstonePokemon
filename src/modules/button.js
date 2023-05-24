const urlAPI = "https://pokeapi.co/api/v2/pokemon";

const getPokemon2 = async () => {
  try {
    const response = await fetch(`${urlAPI}`);
    const data = await response.json();
    console.log(data.results)
    
    displayScores(data.results)
  } catch (error) {
    alert("Errooooooor");
  }
};

const main = document.querySelector('header');
const list = document.createElement('div');
list.classList.add('pokeGroup');
main.insertAdjacentElement('afterEnd', list)

const displayScores = (data) => {
    list.innerHTML = data
      .map(
        (data, index) => `
        <div>
          <h2>${data.name}</h2>
          <img class ="indexPokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg"></img>
          <button class="seePokemon" data-index=${index + 1}>comments</button>
        </diV>
      `,
      )
      .join('');
  };

  export default getPokemon2;
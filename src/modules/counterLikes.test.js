import { pokeCounter } from "./counterComments.js";

describe('PokeCounter', () => {
  test('Counting some pokemons ', () => {

    // Arrange
    const allPokemon = document.createElement('div');
    allPokemon.innerHTML = `
              <div>pokemon 1</div>
              <div>pokemon 2</div>
              <div>pokemon 3</div> 
              <div>pokemon 4</div>
              <div>pokemon 5</div>
              <div>pokemon 6</div>             
          `;

    document.body.appendChild(allPokemon);

    // Act
    const result = pokeCounter(allPokemon);

    // Assert
    expect(result).toBe(6);
  });  

  test('No Pokemon on page', () => {

    // Arrange
    const allPokemon = document.createElement('div');
    
    document.body.appendChild(allPokemon);

    // Act
    const result = pokeCounter(allPokemon);

    // Assert
    expect(result).toBe(0);
  });
  
});
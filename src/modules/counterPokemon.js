const pokeCounter = (allPokemon) => {
  const howManyPokemon = allPokemon.childElementCount;

  if (howManyPokemon !== 0) {
    return howManyPokemon;
  }
  return 0;
};

export default pokeCounter;
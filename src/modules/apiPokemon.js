const getPokemon = () => {
  const url = 'https://pokeapi.co/api/v2/pokemon/';

  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const resources = [];
  const fetchPromises = [];

  for (let i = 1; i <= 10; i += 1) {
    fetchPromises.push(
      fetch(`${url}${i}`, config)
        .then((response) => response.json())
        .then((data) => {
          const pokemon = {
            name: data.name,
            picture: data.sprites.back_default,
            id: data.id,
          };
          resources.push(pokemon);
        })
        .catch((error) => {
          console.log('an error occured: ', error);
        }),
    );
  }

  Promise.all(fetchPromises)
    .then(() => {
    })
    .catch((error) => {
      console.log('an error occured: ', error);
    });
  return resources;
};

export default getPokemon;
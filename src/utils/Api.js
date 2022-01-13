const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

export default {
  getAllPokemon: async () => {
    const obj = []
    //pega lista de pokemons
    const pokemons = await fetch(`${BASE_URL}?limit=151`)
    const res = await pokemons.json()
    res.results.map((poke) =>
      obj.push({
        name: poke.name,
        id: poke.url.substr(-5).replace(/[^0-9]/g, ''),
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.url
          .substr(-5)
          .replace(/[^0-9]/g, '')}.png`,
      })
    )
    return obj
  },
  getPokemonDetails: async (id) => {
    const eggs = []
    const pokeDetails = []

    await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then((res) => res.json())
      .then((r) => {
        eggs.push(r.egg_groups)
        fetch(r.evolution_chain.url)
          .then((r) => r.json())
          .then((r) =>
            pokeDetails.push(
              {
                name: r.chain.species.name,
                level: 0,
                id: r.chain.species.url.substr(-5).replace(/[^0-9]/g, ''),
                eggs: eggs,
              },
              {
                name: r.chain.evolves_to[0]?.species.name,
                level: r.chain.evolves_to[0]?.evolution_details[0].min_level,
                id: r.chain.evolves_to[0]?.species.url
                  .substr(-5)
                  .replace(/[^0-9]/g, ''),
              },
              {
                name: r.chain.evolves_to[0]?.evolves_to[0]?.species.name,
                level:
                  r.chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]
                    .min_level,
                id: r.chain.evolves_to[0]?.evolves_to[0]?.species.url
                  .substr(-5)
                  .replace(/[^0-9]/g, ''),
              }
            )
          )
      })
      .catch((err) => console.log('erro: ' + err))

    return pokeDetails
  },
}

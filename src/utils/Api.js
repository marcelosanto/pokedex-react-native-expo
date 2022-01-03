const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

const obj = []
const PokeDetails = []

export default {
  getPokemonById: async (id) => {
    const req = await fetch(`${BASE_URL}/${id}`)
    let json = await req.json()
    return json
  },
  getAllPokemon: async () => {
    await fetch(`${BASE_URL}?limit=151`)
      .then((res) => res.json())
      .then((res) =>
        res.results.map((poke) => {
          fetch(poke.url)
            .then((r) => r.json())
            .then((pokemon) => {
              obj.push({
                id: pokemon.id,
                name: pokemon.name,
                height: pokemon.height,
                weight: pokemon.weight,
                hab01: pokemon.abilities[0]?.ability.name,
                hab02: pokemon.abilities[1]?.ability.name,
                image: pokemon.sprites.other['official-artwork'].front_default,
                type01: pokemon.types[0].type.name,
                type02: pokemon.types[1]?.type.name,
                stats: pokemon.stats,
                moves: pokemon.moves,
              })
            })
        })
      )
    return obj
  },
  getPokemonDetails: async (id) => {
    const eggs = []

    await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then((res) => res.json())
      .then((r) => {
        eggs.push(r.egg_groups)
        fetch(r.evolution_chain.url)
          .then((r) => r.json())
          .then((r) =>
            PokeDetails.push(
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

    return PokeDetails
  },
}

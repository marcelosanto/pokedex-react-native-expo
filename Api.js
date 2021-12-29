const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

const obj = []

export default {
  getPokemonById: async (id) => {
    const req = await fetch(`${BASE_URL}/${id}`)
    let json = await req.json()
    return json
  },
  getAllPokemon: async () => {
    await fetch(`${BASE_URL}?limit=30`)
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
}

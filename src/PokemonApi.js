const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

export default {
  getPokemonById: async (id) => {
    const req = await fetch(`${BASE_URL}/${id}`)
    let json = await req.json()
    return json
  },
  getAllPokemon: async () => {
    await fetch(`${BASE_URL}?limit=20`)
      .then((response) => response.json())
      .then(function (allpokemon) {
        allpokemon.results.forEach(function (pokemon) {
          getPokemonData(pokemon)
        })
      })
  },
  getPokemonData: async (pokemon) => {
    let url = pokemon.url
    const pokemons = {}

    await fetch(url)
      .then((response) => response.json())
      .then(function (pokeData) {
        pokemons.push(pokeData)
      })

    return pokemons
  },
}

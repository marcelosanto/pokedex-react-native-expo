const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

export default {
  getPokemonById: async (id) => {
    const req = await fetch(`${BASE_URL}/${id}`)
    let json = await req.json()
    return json
  },
  getAllPokemon: async () => {
    const req = await fetch(`${BASE_URL}?limit=10`)
    let json = await req.json()
    return json
  },
}

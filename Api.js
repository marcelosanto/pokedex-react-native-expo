const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

export default {
  getPokemon: async (id) => {
    const req = await fetch(`${BASE_URL}/${id}`)
    let json = await req.json()
    return json
  },
}

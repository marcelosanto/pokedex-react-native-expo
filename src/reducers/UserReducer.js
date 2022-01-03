export const initialState = {
  pokemon: {},
  pokemons: [],
  pokemonDetails: [],
}

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setPokemon':
      return { ...state, pokemon: action.payload.pokemon }
    case 'setPokemons':
      return { ...state, pokemons: action.payload.pokemons }
    case 'setPokemonDetails':
      return { ...state, pokemonDetails: action.payload.pokemonDetails }
    default:
      return state
  }
}

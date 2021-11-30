export const initialState = {
  pokemon: {},
  pokemons: {},
}

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setPokemon':
      return { ...state, pokemon: action.payload.pokemon }

    case 'setPokemons':
      return { ...state, pokemons: action.payload.pokemons }
    default:
      return state
  }
}

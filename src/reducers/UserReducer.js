export const initialState = {
  pokemon: {},
  pokemons: {},
  eggroups: {},
}

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setPokemon':
      return { ...state, pokemon: action.payload.pokemon }
    case 'setPokemons':
      return { ...state, pokemons: action.payload.pokemons }
    case 'setEggroups':
      return { ...state, eggroups: action.payload.eggroups }
    default:
      return state
  }
}

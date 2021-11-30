export const initialState = {
  pokemons: {},
}

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setPokemons':
      return { ...state, pokemons: action.payload.pokemons }
    default:
      return state
  }
}

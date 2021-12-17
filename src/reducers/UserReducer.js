export const initialState = {
  pokemon: {},
  pokemons: [],
  pokemonEvolucao: [],
  eggroups: {},
}

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setPokemon':
      return { ...state, pokemon: action.payload.pokemon }
    case 'setPokemons':
      return { ...state, pokemons: action.payload.pokemons }
    case 'setPokemonEvolucao':
      return { ...state, pokemonEvolucao: action.payload.pokemonEvolucao }
    case 'setEggroups':
      return { ...state, eggroups: action.payload.eggroups }
    default:
      return state
  }
}

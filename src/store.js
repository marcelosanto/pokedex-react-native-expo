import create from 'zustand'

const pokeStore = (set) => ({
  pokemons: [],
  filterPoke: '',
  setPokemons: (pokemon) => set((state) => ({ ...state.pokemons, pokemon })),
  setFilterPoke: (filter) => set((state) => ({ ...state, filter })),
})

export const usePokemonsStore = create(pokeStore)

fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`)
  .then((res) => res.json())
  .then((res) =>
    res.results.map((poke) =>
      fetch(poke.url)
        .then((r) => r.json())
        .then((pokemons) =>
          usePokemonsStore.setState((state) => ({
            ...state,
            pokemons,
          }))
        )
    )
  )

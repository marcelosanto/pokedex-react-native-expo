const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'
const EVO_URL = 'https://pokeapi.co/api/v2/pokemon-species/'

export default {
  getAllPokemon: async () => {
    const obj = []
    //pega lista de pokemons
    const pokemons = await fetch(`${BASE_URL}?limit=151`)
    const res = await pokemons.json()
    res.results.map((poke) =>
      obj.push({
        name: poke.name,
        id: poke.url.substr(-5).replace(/[^0-9]/g, ''),
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.url
          .substr(-5)
          .replace(/[^0-9]/g, '')}.png`,
      })
    )
    return obj
  },
  getPokemonInfo: async (id) => {
    const objPokemon = []

    //pega o dado do pokemon
    const pokemons = await fetch(`${BASE_URL}/${id}`)
    const res = await pokemons.json()
    const eggGroups = await getEggGroup(id)
    const pokeEvolu = await getEvolucao(id)

    objPokemon.push({
      id: res.id,
      name: res.name,
      height: res.height,
      weight: res.weight,
      hab01: res.abilities[0]?.ability.name,
      hab02: res.abilities[1]?.ability.name,
      image: res.sprites.other['official-artwork'].front_default,
      type01: res.types[0].type.name,
      type02: res.types[1]?.type.name,
      stats: res.stats,
      moves: res.moves,
      eggs: eggGroups,
      evolu: pokeEvolu,
    })

    return objPokemon
  },
}

const getEggGroup = async (id) => {
  const objEggGroup = []

  const pokemonEgg = await fetch(`${EVO_URL}${id}`)
  const res = await pokemonEgg.json()
  objEggGroup.push({
    eggGroup: res.egg_groups,
    specie: res.genera[7]?.genus,
  })
  return objEggGroup
}

const getEvolucao = async (id) => {
  const evo = []
  const pokemonEvo = await fetch(`${EVO_URL}${id}`)
  const res = await pokemonEvo.json()

  const evolucoes = await fetch(res.evolution_chain.url)
  const r = await evolucoes.json()
  evo.push(
    {
      name: r.chain.species.name,
      level: 0,
      id: r.chain.species.url.substr(-5).replace(/[^0-9]/g, ''),
    },
    {
      name: r.chain.evolves_to[0]?.species.name,
      level: r.chain.evolves_to[0]?.evolution_details[0]?.min_level,
      id: r.chain.evolves_to[0]?.species.url.substr(-5).replace(/[^0-9]/g, ''),
    },
    {
      name: r.chain.evolves_to[0]?.evolves_to[0]?.species.name,
      level:
        r.chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0].min_level,
      id: r.chain.evolves_to[0]?.evolves_to[0]?.species.url
        .substr(-5)
        .replace(/[^0-9]/g, ''),
    }
  )

  return evo
}

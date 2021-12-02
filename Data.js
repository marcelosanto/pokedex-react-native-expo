//https://pokeapi.co/api/v2/pokemon-species/{id}
//"evolution_chain": {
//"url": "https://pokeapi.co/api/v2/evolution-chain/1/"
//},

//https://pokeapi.co/api/v2/evolution-chain/{id}

export const family = [
  'https://cdn.traction.one/pokedex/pokemon/1.png',
  'https://cdn.traction.one/pokedex/pokemon/2.png',
  'https://cdn.traction.one/pokedex/pokemon/3.png',
]

export const colorOfSpecies = (color) => {
  if (color == 'normal') return '#A8A878'
  if (color == 'fire') return '#F08030'
  if (color == 'water') return '#6890F0'
  if (color == 'electric') return '#F8D030'
  if (color == 'grass') return '#78C850'
  if (color == 'ice') return '#98D8D8'
  if (color == 'fighting') return '#C03028'
  if (color == 'poison') return '#A040A0'
  if (color == 'ground') return '#E0C068'
  if (color == 'flying') return '#A890F0'
  if (color == 'psychic') return '#F85888'
  if (color == 'bug') return '#A8B820'
  if (color == 'rock') return '#B8A038'
  if (color == 'ghost') return '#705898'
  if (color == 'dragon') return '#7038F8'
  if (color == 'dark') return '#705848'
  if (color == 'steel') return '#B8B8D0'
  if (color == 'fairy') return '#EE99AC'
}

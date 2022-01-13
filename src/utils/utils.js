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

export const randomColor = () => {
  const color = [
    '#A8A878',
    '#F08030',
    '#6890F0',
    '#F8D030',
    '#78C850',
    '#98D8D8',
    '#C03028',
    '#A040A0',
    '#E0C068',
    '#A890F0',
    '#F85888',
    '#A8B820',
    '#B8A038',
    '#705898',
    '#7038F8',
    '#705848',
    '#B8B8D0',
    '#EE99AC',
  ]

  let random = Math.floor(Math.random() * color.length)

  return color[random % color.length]
}

export const typesPokemons = [
  'normal',
  'fire',
  'water',
  'electric',
  'grass',
  'ice',
  'fighting',
  'poison',
  'ground',
  'flying',
  'psychic',
  'bug',
  'rock',
  'ghost',
  'dragon',
  'dark',
  'steel',
  'fairy',
]

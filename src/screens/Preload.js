import React from 'react'
import { Text, SafeAreaView } from 'react-native'

import LottieView from 'lottie-react-native'

import { UserContext } from '../context/UserContext'

export default ({ navigation }) => {
  const { state, dispatch } = React.useContext(UserContext)
  const [pokemons, setPokemons] = React.useState([])

  async function fetchKantoPokemon() {
    await fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then((response) => response.json())
      .then(function (allpokemon) {
        allpokemon.results.forEach(function (pokemon) {
          fetchPokemonData(pokemon)
        })
      })
  }

  async function fetchPokemonData(pokemon) {
    let url = pokemon.url // <--- this is saving the pokemon url to a variable to use in the fetch.
    //Example: https://pokeapi.co/api/v2/pokemon/1/"

    await fetch(url)
      .then((response) => response.json())
      .then(function (pokeData) {
        //console.log(pokeData)
        setPokemons((oldData) => [...oldData, pokeData])
      })
  }

  React.useEffect(() => {
    fetchKantoPokemon()
  }, [])

  setTimeout(() => {
    dispatch({
      type: 'setPokemons',
      payload: {
        pokemons: pokemons,
      },
    })

    navigation.navigate('Inicio')
  }, 2000)

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <LottieView
        source={require('../../assets/pokeball.json')}
        autoPlay={true}
        loop={true}
      />
    </SafeAreaView>
  )
}

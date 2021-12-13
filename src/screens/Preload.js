import React from 'react'
import { Text, SafeAreaView } from 'react-native'

import LottieView from 'lottie-react-native'

import { UserContext } from '../context/UserContext'
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar'

export default ({ navigation }) => {
  const { state, dispatch } = React.useContext(UserContext)
  const [pokemons, setPokemons] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  const fetchAllPokemon = async () => {
    const req = await fetch('https://pokeapi.co/api/v2/pokemon?limit=6')
    let response = await req.json()

    response.results.map((item) => fetchPokemonData(item.url))
  }

  const fetchPokemonData = async (url) => {
    const req = await fetch(url)
    let json = await req.json()
    setPokemons((old) => [...old, json])
  }

  if (pokemons.length >= 6) {
    dispatch({
      type: 'setPokemons',
      payload: {
        pokemons: pokemons,
      },
    })

    navigation.reset({
      index: 1,
      routes: [{ name: 'Inicio' }],
    })
  }

  React.useEffect(() => {
    let abortController = new AbortController()

    fetchAllPokemon()

    return () => {
      abortController.abort()
    }
  }, [])

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

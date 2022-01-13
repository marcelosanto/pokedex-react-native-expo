import React, { useContext, useEffect } from 'react'
import { SafeAreaView } from 'react-native'

import LottieView from 'lottie-react-native'

import { UserContext } from '../context/UserContext'
import Api from '../utils/Api'

export default ({ navigation }) => {
  const { state, dispatch } = useContext(UserContext)

  const getPokemons = async () => {
    const pokemons = await Api.getAllPokemon()

    if (pokemons.length > 150) {
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
  }
  useEffect(() => {
    getPokemons()
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

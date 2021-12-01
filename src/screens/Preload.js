import React from 'react'
import { Text, SafeAreaView } from 'react-native'

import LottieView from 'lottie-react-native'

import { UserContext } from '../context/UserContext'

export default ({ navigation }) => {
  const { state, dispatch } = React.useContext(UserContext)
  const [pokemons, setPokemons] = React.useState([])

  setTimeout(() => {
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

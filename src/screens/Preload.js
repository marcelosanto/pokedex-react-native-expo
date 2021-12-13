import React from 'react'
import { Text, SafeAreaView } from 'react-native'

import LottieView from 'lottie-react-native'

import { UserContext } from '../context/UserContext'
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar'

export default ({ navigation }) => {
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

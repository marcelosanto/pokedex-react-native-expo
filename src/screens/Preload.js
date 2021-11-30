import React from 'react'
import { Text, SafeAreaView } from 'react-native'

import LottieView from 'lottie-react-native'

export default () => {
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

import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './stacks/TabNavigator'
import PokemonInfo from './PokemonInfo'

export default () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'green' }}>
      <PokemonInfo />
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </View>
  )
}

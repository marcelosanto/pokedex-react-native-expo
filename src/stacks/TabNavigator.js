import React from 'react'
import { View, Text } from 'react-native'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import About from '../components/About'
import Moves from '../components/Moves'
import Evolution from '../components/Evolution'
import BaseStats from '../components/BaseStats'
import PokemonInfo from '../PokemonInfo'
import { UserContext } from '../context/UserContext'
import { colorOfSpecies } from '../../Data'

const Tab = createMaterialTopTabNavigator()

export default () => {
  const { state } = React.useContext(UserContext)

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colorOfSpecies(state.pokemon.types[0].type.name),
      }}
    >
      <PokemonInfo />
      <Tab.Navigator
        screenOptions={{
          tabBarItemStyle: { width: 100 },
          tabBarStyle: {
            height: 80,
            justifyContent: 'center',
            borderTopLeftRadius: 35,
            borderTopRightRadius: 35,
          },
        }}
      >
        <Tab.Screen name='About' component={About} />
        <Tab.Screen name='BaseStats' component={BaseStats} />
        <Tab.Screen name='Evolution' component={Evolution} />
        <Tab.Screen name='Moves' component={Moves} />
      </Tab.Navigator>
    </View>
  )
}

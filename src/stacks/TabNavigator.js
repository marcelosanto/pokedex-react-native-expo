import React from 'react'
import { View, SafeAreaView, StatusBar } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import About from '../screens/About'
import Moves from '../screens/Moves'
import Evolution from '../screens/Evolution'
import BaseStats from '../screens/BaseStats'
import PokemonInfo from '../components/PokemonInfo'

import { UserContext } from '../context/UserContext'
import { colorOfSpecies } from '../../Data'
import Header from '../components/Header'

const Tab = createMaterialTopTabNavigator()

export default () => {
  const { state } = React.useContext(UserContext)

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: `${colorOfSpecies(state.pokemon.type01)}88`,
        paddingTop: StatusBar.currentHeight - 30,
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
    </SafeAreaView>
  )
}

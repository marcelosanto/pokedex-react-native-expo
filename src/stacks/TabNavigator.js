import React from 'react'
import { View, SafeAreaView, StatusBar } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useRoute } from '@react-navigation/native'

import About from '../components/About'
import Moves from '../components/Moves'
import Evolution from '../components/Evolution'
import BaseStats from '../components/BaseStats'
import PokemonInfo from '../PokemonInfo'
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
        backgroundColor: colorOfSpecies(state.pokemon.types[0].type.name),
        //paddingTop: StatusBar.currentHeight,
      }}
    >
      <Header />
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

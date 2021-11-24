import React from 'react'
import { View, Text } from 'react-native'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import About from './components/About'
import Moves from './components/Moves'
import Evolution from './components/Evolution'
import BaseStats from './components/BaseStats'

const Tab = createMaterialTopTabNavigator()

export default () => {
  return (
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
  )
}

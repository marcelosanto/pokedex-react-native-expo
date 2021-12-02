import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Preload from '../screens/Preload'
import Inicio from '../screens/Inicio'
import Home from '../Home'
import TabNavigator from './TabNavigator'

const Stack = createNativeStackNavigator()

export default () => (
  <Stack.Navigator
    initialRouteName='Preload'
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name='Preload' component={Preload} />
    <Stack.Screen name='Inicio' component={Inicio} />
    <Stack.Screen name='Home' component={Home} />
    <Stack.Screen name='TabNavigator' component={TabNavigator} />
  </Stack.Navigator>
)

import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Preload from '../screens/Preload'
import Inicio from '../screens/Inicio'
import Home from '../Home'
import TabNavigator from './TabNavigator'

const Stack = createNativeStackNavigator()

export default () => (
  <Stack.Navigator
    initialRouteName='Inicio'
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name='Home' component={Home} />
    <Stack.Screen name='Inicio' component={Inicio} />
    <Stack.Screen name='TabNavigator' component={TabNavigator} />
  </Stack.Navigator>
)

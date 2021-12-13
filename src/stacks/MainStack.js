import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import TabNavigator from './TabNavigator'
import Inicio from '../screens/Inicio'
import Preload from '../screens/Preload'

const Stack = createNativeStackNavigator()

export default () => (
  <Stack.Navigator
    initialRouteName='Inicio'
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name='Preload' component={Preload} />
    <Stack.Screen name='Inicio' component={Inicio} />
    <Stack.Screen name='TabNavigator' component={TabNavigator} />
  </Stack.Navigator>
)

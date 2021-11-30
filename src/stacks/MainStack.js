import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Preload from '../screens/Preload'
import Inicio from '../screens/Inicio'

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
  </Stack.Navigator>
)

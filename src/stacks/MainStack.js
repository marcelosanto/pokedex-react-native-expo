import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import TabNavigator from './TabNavigator'
import Inicio from '../screens/Inicio'
import Preload from '../screens/Preload'

const Stack = createNativeStackNavigator()

export default () => (
  <Stack.Navigator initialRouteName='Preload'>
    <Stack.Screen name='Preload' component={Preload} />
    <Stack.Screen
      options={{ headerShown: false }}
      name='Inicio'
      component={Inicio}
    />
    <Stack.Screen
      options={{ title: 'Detalhes' }}
      name='TabNavigator'
      component={TabNavigator}
    />
  </Stack.Navigator>
)

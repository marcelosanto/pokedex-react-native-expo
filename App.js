import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'
import PokemonInfo from './src/PokemonInfo'
import Inicio from './src/components/Inicio'

export default function App() {
  return <Inicio />
}

const styles = StyleSheet.create({})

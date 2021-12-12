import React from 'react'
import { Text, View, TextInput } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export default () => {
  return (
    <View
      style={{
        width: '100%',
        height: 100,
        marginLeft: 20,
      }}
    >
      <View>
        <Text style={{ fontSize: 48, fontWeight: 'bold' }}>Pokedex</Text>
        <Text>Busque o Pokemon pelo nome ou numero na Pokedex</Text>
      </View>
    </View>
  )
}

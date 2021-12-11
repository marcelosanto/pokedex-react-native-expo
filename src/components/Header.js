import React from 'react'
import { Text, View, TextInput } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export default () => {
  return (
    <View
      style={{
        width: '100%',
        height: 150,
        margin: 20,
      }}
    >
      <View>
        <Text style={{ fontSize: 48, fontWeight: 'bold' }}>Pokedex</Text>
        <Text>Busque o Pokemon pelo nome ou numero na Pokedex</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginRight: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderRadius: 25,
          marginTop: 10,
        }}
      >
        <FontAwesome name='search' size={24} color='black' />
        <TextInput
          style={{
            height: 60,
            width: '70%',
            marginLeft: 20,
          }}
          placeholder='Nome ou Id.'
        />
      </View>
    </View>
  )
}

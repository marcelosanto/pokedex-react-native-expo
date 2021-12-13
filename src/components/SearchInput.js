import React from 'react'
import { Text, View, TextInput } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export default ({ value, onChangeText }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 25,
        width: '80%',
      }}
    >
      <FontAwesome name='search' size={24} color='black' />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{
          height: 60,
          width: '85%',
          marginLeft: 10,
        }}
        placeholder='Nome ou Id.'
      />
    </View>
  )
}

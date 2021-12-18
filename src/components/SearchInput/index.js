import React from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export default ({ value, onChangeText, buttonPress }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <View
        style={{
          borderRadius: 10,
          backgroundColor: '#B0C4DE88',
          width: '70%',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <FontAwesome
          style={{
            marginLeft: 10,
          }}
          name='search'
          size={24}
          color='black'
        />
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
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#483D8B',
          width: 60,
          height: 60,
          borderRadius: 15,
        }}
      >
        <FontAwesome
          name='sliders'
          size={30}
          color='white'
          onPress={buttonPress}
        />
      </TouchableOpacity>
    </View>
  )
}

import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <View
        style={{
          width: '100%',
          height: 30,
          backgroundColor: '#000',
          justifyContent: 'center',
        }}
      >
        <Text style={{ color: '#fff' }}> Voltar </Text>
      </View>
    )
  }
}

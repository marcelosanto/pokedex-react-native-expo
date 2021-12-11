import React from 'react'
import { View, Image, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { family } from '../../Data'

export default () => {
  return (
    <View
      style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}
    >
      {family.map((item) => (
        <View style={{ alignItems: 'center' }} key={item.toString()}>
          <Image
            style={{ width: 100, height: 100, marginBottom: 20 }}
            source={{ uri: item }}
          />
          <AntDesign name='caretdown' size={24} color='black' />
        </View>
      ))}
    </View>
  )
}

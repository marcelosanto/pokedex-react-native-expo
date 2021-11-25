import React from 'react'
import { View, Image } from 'react-native'

import { family } from '../../Data'

export default () => {
  return family.map((item) => (
    <View key={item}>
      <Image style={{ width: 100, height: 100 }} source={{ uri: item }} />
    </View>
  ))
}

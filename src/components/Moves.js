import React from 'react'
import { View, Text } from 'react-native'

import { moves } from '../../Data'

export default () => {
  return moves.map((item) => (
    <View style={{ alignItems: 'center' }} key={item.move.name.toString()}>
      <Text style={{ color: '#FFF', backgroundColor: 'blue' }}>
        {item.move.name}
      </Text>
    </View>
  ))
}

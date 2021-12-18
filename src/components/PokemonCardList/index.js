import React from 'react'
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'

import { styles } from './styles'

export default ({ id, img, name, type01, type02, bg, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={[styles.card, { backgroundColor: bg }]}>
        <Image style={styles.image} source={{ uri: img }} />
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.title}>
            {id < 10 ? '00' + id : id < 100 ? '0' + id : id}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

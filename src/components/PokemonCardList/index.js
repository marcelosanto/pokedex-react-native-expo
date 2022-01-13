import React, { memo } from 'react'
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import { colorOfSpecies, randomColor } from '../../utils/utils'

import { styles } from './styles'

const PokemonCardList = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={[styles.card, { backgroundColor: `${randomColor()}88` }]}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.title}>
            {item.id
              ? `00${item.id}`
              : item.id < 100
              ? `0${item.id}`
              : `${item.id}`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default memo(PokemonCardList)

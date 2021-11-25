import React from 'react'
import { View, Text } from 'react-native'

import { pokemon } from '../../Data'

export default () => {
  const color = [
    '#637aff',
    '#60c5a8',
    '#CCCCCC',
    '#ff5454',
    '#039a83',
    '#dcb834',
    '#8f06e4',
    'skyblue',
    '#ff4c98',
  ]

  const bgColor = (i) => color[i % color.length]

  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
      }}
    >
      {pokemon.moves.map((item, index) => (
        <Text
          key={index}
          style={{
            margin: 10,
            color: 'black',
            backgroundColor: bgColor(index),
            borderRadius: 100,
            width: 100,
            textAlign: 'center',
            textTransform: 'capitalize',
          }}
        >
          {item.move.name}
        </Text>
      ))}
    </View>
  )
}

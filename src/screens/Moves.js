import React, { useContext } from 'react'
import { SafeAreaView, ScrollView, Text } from 'react-native'

import { UserContext } from '../context/UserContext'
import { randomColor } from '../utils/utils'

export default () => {
  const { state } = useContext(UserContext)

  return (
    <ScrollView>
      <SafeAreaView
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 40,
        }}
      >
        {state.pokemon.moves.map((item, index) => (
          <Text
            key={index}
            style={{
              margin: 10,
              color: 'black',
              backgroundColor: randomColor(),
              borderRadius: 100,
              width: 100,
              textAlign: 'center',
              textTransform: 'capitalize',
            }}
          >
            {item.move.name}
          </Text>
        ))}
      </SafeAreaView>
    </ScrollView>
  )
}

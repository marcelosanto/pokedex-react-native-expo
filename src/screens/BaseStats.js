import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import Progress from '../components/Progress'

import { UserContext } from '../context/UserContext'
import { randomColor } from '../utils/utils'

export default () => {
  const { state } = useContext(UserContext)

  return state.pokemonDetails[0].stats.map((item, index) => (
    <View
      key={item.stat.name.toString()}
      style={{
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <View style={{ width: 120 }}>
        <Text style={{ textTransform: 'capitalize' }}>{item.stat.name}</Text>
      </View>

      <View>
        <Text>{item.base_stat}</Text>
      </View>
      <View style={{ width: 180 }}>
        <Progress
          step={item.base_stat / 15}
          steps={10}
          height={10}
          color={randomColor()}
        />
      </View>
    </View>
  ))
}

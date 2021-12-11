import React from 'react'
import { View, Text } from 'react-native'
import Progress from '../components/Progress'

import { UserContext } from '../context/UserContext'

export default () => {
  const { state } = React.useContext(UserContext)

  const color = [
    '#637aff',
    '#60c5a8',
    '#ff5454',
    '#039a83',
    '#dcb834',
    '#8f06e4',
    'skyblue',
    '#ff4c98',
  ]

  const bgColor = (i) => color[i % color.length]

  return state.pokemon.stats.map((item, index) => (
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
          step={item.base_stat / 11}
          steps={10}
          height={8}
          color={bgColor(index)}
        />
      </View>
    </View>
  ))
}

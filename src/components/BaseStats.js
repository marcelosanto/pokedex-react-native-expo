import React from 'react'
import { View, Text } from 'react-native'
import Progress from './Progress'

import { stats } from '../../Data'

export default () => {
  let color = ['red', 'green']

  return stats.map((item) => (
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
      <View style={{ width: 100 }}>
        <Text>{item.stat.name}</Text>
      </View>

      <View>
        <Text style={{ textTransform: 'capitalize' }}>{item.base_stat}</Text>
      </View>
      <View style={{ width: 200 }}>
        <Progress
          step={item.base_stat / 10}
          steps={10}
          height={7}
          color={color[Math.floor(Math.random() * color.length)]}
        />
      </View>
    </View>
  ))
}

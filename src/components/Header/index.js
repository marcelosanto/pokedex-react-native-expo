import React from 'react'
import { Text, View } from 'react-native'

import { styles } from './styles'

export default () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 48, fontWeight: 'bold' }}>Pokedex</Text>
        <Text>Busque o Pokemon pelo nome ou numero na Pokedex</Text>
      </View>
    </View>
  )
}

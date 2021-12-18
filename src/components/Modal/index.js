import React, { useState } from 'react'
import { View, Text, Button, Modal, TouchableOpacity } from 'react-native'

import { colorOfSpecies, typesPokemons } from '../../utils/utils'

import { styles } from './styles'

export default ({ visible, onPress }) => {
  return (
    <Modal transparent={true} visible={visible}>
      <View style={styles.container}>
        <Text style={styles.textTitle}>Filtrar resultados:</Text>

        <View style={styles.containerTypes}>
          {typesPokemons.map((item, index) => (
            <TouchableOpacity key={index}>
              <Text
                style={[
                  styles.text,
                  {
                    backgroundColor: colorOfSpecies(item),
                  },
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Button title='Salvar' onPress={onPress} />
      </View>
    </Modal>
  )
}

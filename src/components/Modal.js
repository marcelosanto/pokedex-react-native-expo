import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Button,
  Modal,
  TouchableOpacity,
} from 'react-native'

import { colorOfSpecies } from '../../Data'

export default ({ visible, onPress }) => {
  const typesPokemons = [
    'normal',
    'fire',
    'water',
    'electric',
    'grass',
    'ice',
    'fighting',
    'poison',
    'ground',
    'flying',
    'psychic',
    'bug',
    'rock',
    'ghost',
    'dragon',
    'dark',
    'steel',
    'fairy',
  ]

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: 300,
  },
  containerTypes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  text: {
    margin: 10,
    color: 'black',
    borderRadius: 100,
    width: 100,
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
})

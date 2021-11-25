import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Foundation } from '@expo/vector-icons'

import { pokemon, egggroup } from '../../Data'

export default () => {
  const PokemonAboutInfo = ({ title, textInfo }) => {
    return (
      <>
        <View style={{ width: 100 }}>
          <Text style={{ marginBottom: 20 }}>{title}</Text>
        </View>

        <View style={{ width: 150 }}>
          <Text>{textInfo}</Text>
        </View>
      </>
    )
  }
  return (
    <View style={{ flex: 1, marginLeft: 20 }}>
      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <View style={styles.containerDetails}>
          <PokemonAboutInfo
            title='Species'
            textInfo={egggroup.genera[7].genus}
          />
        </View>

        <View style={styles.containerDetails}>
          <View style={{ width: 100 }}>
            <Text style={styles.text}>Height</Text>
          </View>
          <View style={{ width: 150 }}>
            <Text style={styles.textInfo}>{pokemon.height / 10 + ' cm'}</Text>
          </View>
        </View>
        <View style={styles.containerDetails}>
          <View style={{ width: 100 }}>
            <Text style={styles.text}>Weight</Text>
          </View>
          <View style={{ width: 150 }}>
            <Text style={styles.textInfo}>{pokemon.weight / 10 + ' Kg'}</Text>
          </View>
        </View>
        <View style={styles.containerDetails}>
          <View style={{ width: 100 }}>
            <Text style={styles.text}>Abilities</Text>
          </View>
          <View style={{ width: 150 }}>
            <Text style={styles.textInfo}>
              {`${pokemon.abilities[0].ability.name}, ${pokemon.abilities[1].ability.name}
                 `}
            </Text>
          </View>
        </View>
      </View>
      <View style={{}}>
        <Text style={styles.textTitle}>Breeding</Text>

        <View style={styles.containerDetails}>
          <View style={{ width: 100 }}>
            <Text style={styles.text}>Gender</Text>
          </View>
          <View style={{ width: 150 }}>
            <Text style={styles.textInfo}>
              <Foundation name='male-symbol' size={24} color='blue' /> Male
              {'   '}
              {'  '}
              <Foundation name='female-symbol' size={24} color='pink' />
              Femea
            </Text>
          </View>
        </View>

        <View style={styles.containerDetails}>
          <View style={{ width: 100 }}>
            <Text style={styles.text}>Egg Groups</Text>
          </View>
          <View style={{ width: 150 }}>
            <Text style={styles.textInfo}>{egggroup.egg_groups[0].name}</Text>
          </View>
        </View>
        <View style={styles.containerDetails}>
          <View style={{ width: 100 }}>
            <Text style={styles.text}>Egg Cycle</Text>
          </View>
          <View style={{ width: 150 }}>
            <Text style={styles.textInfo}>{egggroup.egg_groups[1].name}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: { marginBottom: 20 },
  textTitle: {
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  textInfo: { textTransform: 'capitalize' },
})

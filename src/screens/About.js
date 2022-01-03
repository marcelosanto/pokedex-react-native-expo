import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Foundation } from '@expo/vector-icons'

import { UserContext } from '../context/UserContext'

export default () => {
  const { state } = useContext(UserContext)

  const PokemonAboutInfo = ({ title, textInfo }) => {
    return (
      <>
        <View style={{ width: 100 }}>
          <Text style={styles.text}>{title}</Text>
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
            //state.eggroups?.genera[7]?.genus
            textInfo={'error Bug'}
          />
        </View>

        <View style={styles.containerDetails}>
          <View style={{ width: 100 }}>
            <Text style={styles.text}>Height</Text>
          </View>
          <View style={{ width: 150 }}>
            <Text style={styles.textInfo}>
              {state.pokemon.height > 1
                ? state.pokemon.height / 10 + ' m'
                : state.pokemon.height + ' cm'}
            </Text>
          </View>
        </View>
        <View style={styles.containerDetails}>
          <View style={{ width: 100 }}>
            <Text style={styles.text}>Weight</Text>
          </View>
          <View style={{ width: 150 }}>
            <Text style={styles.textInfo}>
              {state.pokemon.weight / 10 + ' Kg'}
            </Text>
          </View>
        </View>
        <View style={styles.containerDetails}>
          <View style={{ width: 100 }}>
            <Text style={styles.text}>Abilities</Text>
          </View>
          <View style={{ width: 150 }}>
            <Text style={styles.textInfo}>
              {`${state.pokemon.hab01}, ${state.pokemon.hab02}
                 `}
            </Text>
          </View>
        </View>
      </View>
      <View>
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
            <Text style={styles.textInfo}>
              {state.pokemonDetails[0].eggs[0][0]?.name || 'null'}
            </Text>
          </View>
        </View>
        <View style={styles.containerDetails}>
          <View style={{ width: 100 }}>
            <Text style={styles.text}>Egg Cycle</Text>
          </View>
          <View style={{ width: 150 }}>
            <Text style={styles.textInfo}>
              {state.pokemonDetails[0].eggs[0][1]?.name || 'null'}
            </Text>
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
  text: { marginBottom: 10, fontWeight: 'bold', fontSize: 16 },
  textTitle: {
    marginTop: 0,
    marginBottom: 15,
    fontWeight: 'bold',
    fontSize: 20,
  },
  textInfo: { textTransform: 'capitalize' },
})

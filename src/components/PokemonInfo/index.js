import React, { useContext } from 'react'
import { View, SafeAreaView, Text, Image } from 'react-native'

import { styles } from './styles'

import { colorOfSpecies } from '../../utils/utils'

import { UserContext } from '../../context/UserContext'

export default () => {
  const { state } = useContext(UserContext)
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
        }}
      >
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <Text style={styles.text}>{state.pokemonDetails[0].name}</Text>

          {state.pokemonDetails[0].type02 ? (
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-around' }}
            >
              <Text
                style={[
                  styles.textLabel,
                  {
                    backgroundColor: colorOfSpecies(
                      state.pokemonDetails[0].type01
                    ),
                  },
                ]}
              >
                {state.pokemonDetails[0].type01}
              </Text>

              <Text
                style={[
                  styles.textLabel,
                  {
                    backgroundColor: colorOfSpecies(
                      state.pokemonDetails[0].type02
                    ),
                  },
                ]}
              >
                {state.pokemonDetails[0].type02}
              </Text>
            </View>
          ) : (
            <View style={{ width: '100%' }}>
              <Text style={styles.textLabel}>
                {state.pokemonDetails[0].type01}
              </Text>
            </View>
          )}
        </View>
        <View>
          <Text
            style={{
              marginTop: 30,
              fontSize: 20,
              color: '#FFF',
              fontWeight: 'bold',
            }}
          >
            #{state.pokemon.id}
          </Text>
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Image
          style={styles.image}
          source={{
            uri: state.pokemon.image,
          }}
        />
      </View>
    </View>
  )
}

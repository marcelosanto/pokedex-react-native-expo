import React, { useContext, useState, useEffect } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { UserContext } from '../context/UserContext'

export default () => {
  const { state } = useContext(UserContext)
  const [pokemonImg, setPokemonImg] = useState(state.pokemonDetails[0].evolu)

  return (
    <View
      style={{
        justifyContent: 'space-around',
        flex: 1,
      }}
    >
      {pokemonImg[1].id == undefined && (
        <View style={{ alignItems: 'center' }}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri: `https://cdn.traction.one/pokedex/pokemon/${pokemonImg[0].id}.png`,
            }}
          />
          <Text style={styles.nomePokemon}>{pokemonImg[0].name}</Text>
        </View>
      )}
      {pokemonImg[1].id != undefined && (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <View style={{ alignItems: 'center' }}>
            <Image
              style={{ width: 100, height: 100 }}
              source={{
                uri: `https://cdn.traction.one/pokedex/pokemon/${pokemonImg[0].id}.png`,
              }}
            />
            <Text style={styles.nomePokemon}>{pokemonImg[0].name}</Text>
          </View>
          <View>
            <Text style={styles.nomePokemon}>Level: {pokemonImg[1].level}</Text>
            <AntDesign name='arrowright' size={48} color='black' />
          </View>

          <View style={{ alignItems: 'center' }}>
            <Image
              style={{ width: 100, height: 100 }}
              source={{
                uri: `https://cdn.traction.one/pokedex/pokemon/${pokemonImg[1].id}.png`,
              }}
            />
            <Text style={styles.nomePokemon}>{pokemonImg[1].name}</Text>
          </View>
        </View>
      )}
      {pokemonImg[2].id != undefined && (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <View style={{ alignItems: 'center' }}>
            <Image
              style={{ width: 100, height: 100 }}
              source={{
                uri: `https://cdn.traction.one/pokedex/pokemon/${pokemonImg[1].id}.png`,
              }}
            />
            <Text style={styles.nomePokemon}>{pokemonImg[1].name}</Text>
          </View>
          <View>
            <Text style={styles.nomePokemon}>Level: {pokemonImg[2].level}</Text>
            <AntDesign name='arrowright' size={48} color='black' />
          </View>

          <View style={{ alignItems: 'center' }}>
            <Image
              style={{ width: 100, height: 100 }}
              source={{
                uri: `https://cdn.traction.one/pokedex/pokemon/${pokemonImg[2].id}.png`,
              }}
            />
            <Text style={styles.nomePokemon}>{pokemonImg[2].name}</Text>
          </View>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  nomePokemon: { textTransform: 'capitalize', fontWeight: 'bold' },
})

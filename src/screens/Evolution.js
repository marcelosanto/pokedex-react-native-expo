import React, { useContext, useState, useEffect } from 'react'
import { View, Image, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { family } from '../../Data'
import { UserContext } from '../context/UserContext'

export default () => {
  const { state } = useContext(UserContext)
  const [pokemonImg, setPokemonImg] = useState(state.pokemonEvolucao)

  return (
    <View
      style={{
        justifyContent: 'space-around',
        flex: 1,
      }}
    >
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
          <Text>{pokemonImg[0].name}</Text>
        </View>
        <View>
          <Text>Level: {pokemonImg[1].level}</Text>
          <AntDesign name='arrowright' size={48} color='black' />
        </View>

        <View style={{ alignItems: 'center' }}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri: `https://cdn.traction.one/pokedex/pokemon/${pokemonImg[1].id}.png`,
            }}
          />
          <Text>{pokemonImg[1].name}</Text>
        </View>
      </View>
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
            <Text>{pokemonImg[1].name}</Text>
          </View>
          <View>
            <Text>Level: {pokemonImg[2].level}</Text>
            <AntDesign name='arrowright' size={48} color='black' />
          </View>

          <View style={{ alignItems: 'center' }}>
            <Image
              style={{ width: 100, height: 100 }}
              source={{
                uri: `https://cdn.traction.one/pokedex/pokemon/${pokemonImg[2].id}.png`,
              }}
            />
            <Text>{pokemonImg[2].name}</Text>
          </View>
        </View>
      )}
    </View>
  )
}

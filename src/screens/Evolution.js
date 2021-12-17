import React, { useContext, useState, useEffect } from 'react'
import { View, Image, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { family } from '../../Data'
import { UserContext } from '../context/UserContext'

export default () => {
  const { state } = useContext(UserContext)
  const [pokemonImg, setPokemonImg] = useState([])

  return (
    <View
      style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}
    >
      {state.pokemonEvolucao.map((item) => (
        <View style={{ alignItems: 'center' }} key={item.toString()}>
          <Text>{item.name}</Text>
          <Text>{item.level}</Text>
          <Text>{item.id}</Text>
        </View>
      ))}
    </View>
  )
}

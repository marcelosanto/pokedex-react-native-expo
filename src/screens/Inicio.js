import React, { useEffect, useRef, useState } from 'react'
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Alert,
  Animated,
  TextInput,
} from 'react-native'

import { CommonActions } from '@react-navigation/native'

import { colorOfSpecies } from '../../Data'
import { UserContext } from '../context/UserContext'
import PokemonCardList from '../components/PokemonCardList'
import Header from '../components/Header'

export default ({ navigation }) => {
  const { state, dispatch } = React.useContext(UserContext)
  const [pokemons, setPokemons] = useState([])

  const fetchAllPokemon = async () => {
    await fetch('https://pokeapi.co/api/v2/pokemon?limit=05')
      .then((response) => response.json())
      .then((allpokemon) => {
        allpokemon.results.forEach((pokemon) => {
          fetchPokemonData(pokemon)
        })
      })
  }

  const fetchPokemonData = async (pokemon) => {
    let url = pokemon.url

    await fetch(url)
      .then((response) => response.json())
      .then(function (pokeData) {
        setPokemons((oldData) => [...oldData, pokeData])
      })
  }

  React.useEffect(() => {
    fetchAllPokemon()
  }, [])

  const pokemonDetails = async (pokemon) => {
    dispatch({
      type: 'setPokemon',
      payload: {
        pokemon: pokemon,
      },
    })

    const req = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`
    )
    let json = await req.json()

    if (json) {
      dispatch({
        type: 'setEggroups',
        payload: {
          eggroups: json,
        },
      })

      navigation.dispatch(CommonActions.navigate('TabNavigator'))
    }
  }

  const handlePokemonInfo = async (pokemon) => {
    await pokemonDetails(pokemon)
  }

  const renderItem = ({ item }) => (
    <View
      style={{
        margin: 20,
      }}
    >
      <PokemonCardList
        onPress={() => handlePokemonInfo(item)}
        key={item.id}
        id={item.id}
        img={item.sprites.other['official-artwork'].front_default}
        name={item.name}
        type01={item.types[0].type.name}
        type02={item.types[1]?.type.name}
        bg={`${colorOfSpecies(item.types[0].type.name)}88`}
      />
    </View>
  )

  return (
    <SafeAreaView
      style={{
        paddingTop: StatusBar.currentHeight,
        paddingBottom: 40,
        height: '100%',
      }}
    >
      <Header />

      <FlatList
        data={pokemons}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      {/*  */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 250,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 1,
    margin: 10,
    backgroundColor: '#EE99AC',
  },
  text: {
    fontSize: 40,
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  textLabel: {
    borderRadius: 100,
    width: 100,
    textAlign: 'center',
    backgroundColor: '#FFF',
    opacity: 0.5,
    marginLeft: 15,
    fontSize: 24,
    color: 'black',
    textTransform: 'capitalize',
    marginBottom: 20,
    marginTop: 20,
  },
  image: {
    height: 200,
    width: 200,
    right: 50,
  },
})

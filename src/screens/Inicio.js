import React, { useEffect, useRef, useState, useContext } from 'react'
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
  Dimensions,
} from 'react-native'
import { CommonActions } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'

import { Animations } from '../constants/Animations'
import { colorOfSpecies } from '../../Data'

import { UserContext } from '../context/UserContext'
import PokemonCardList from '../components/PokemonCardList'
import Header from '../components/Header'
import SearchInput from '../components/SearchInput'

export default ({ navigation }) => {
  const { state, dispatch } = useContext(UserContext)
  const [pokemons, setPokemons] = useState([])
  const [list, setList] = useState([])
  const [searchText, setSearchText] = useState('')
  const [loading, setLoading] = useState(false)

  // pega todos pokemons.
  async function getAllpokemons(qtd = 1) {
    //pega lista de pokemons
    const pokemons = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${qtd}`
    ).then((res) => res.json())

    //pega o perfil de cada pokemon
    const promises = pokemons.results.map((poke) =>
      fetch(poke.url).then((r) => r.json())
    )

    //retorna os pokemons apos a promises serem resolvidas
    const pokem = await Promise.all(promises)

    //add cada pokemon no array obj
    pokem.map((p) => setPokemons((old) => [...old, p]))
  }

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

  //gera animação aleatoria
  // const animation = Animations[Math.floor(Math.random() * Animations.length)]
  // console.log(animation)

  const renderItem = ({ item, index }) => (
    <Animatable.View animation='fadeInLeft' duration={1000} delay={index * 300}>
      <View style={styles.listItem}>
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
    </Animatable.View>
  )

  useEffect(() => {
    getAllpokemons(10)
    setTimeout(() => {
      setList(pokemons)
    }, 2000)
  }, [loading])

  useEffect(() => {
    if (searchText === '') {
      setList(pokemons)
    } else {
      setList(
        pokemons.filter((item) => {
          if (item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
            return true
          } else {
            return false
          }
        })
      )
    }
  }, [searchText])

  return (
    <View
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        height: '100%',
      }}
    >
      <View
        style={{
          elevation: 4,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
        <Header />
        <SearchInput
          value={searchText}
          onChangeText={(t) => setSearchText(t)}
        />
      </View>

      <FlatList
        data={pokemons}
        renderItem={renderItem}
        keyExtractor={(_, i) => String(i)}
        showsVerticalScrollIndicator={false}
      />
    </View>
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
  listItem: {
    width: Dimensions.get('window').width,
    marginTop: 30,
    marginBottom: 30,
  },
})

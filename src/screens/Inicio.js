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
import Modal from '../components/Modal'

export default ({ navigation }) => {
  const { state, dispatch } = useContext(UserContext)
  const [pokemons, setPokemons] = useState([])
  const [list, setList] = useState([])
  const [searchText, setSearchText] = useState('')
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(false)

  // pega todos pokemons.
  async function getAllpokemons(qtd = 1) {
    //pega lista de pokemons
    const pokemons = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${qtd}`
    )
      .then((res) => res.json())
      .then((res) =>
        res.results.map((poke) =>
          fetch(poke.url)
            .then((r) => r.json())
            .then((pokemon) => {
              setPokemons((old) => [
                ...old,
                {
                  id: pokemon.id,
                  name: pokemon.name,
                  height: pokemon.height,
                  weight: pokemon.weight,
                  hab01: pokemon.abilities[0]?.ability.name,
                  hab02: pokemon.abilities[1]?.ability.name,
                  image:
                    pokemon.sprites.other['official-artwork'].front_default,
                  type01: pokemon.types[0].type.name,
                  type02: pokemon.types[1]?.type.name,
                  stats: pokemon.stats,
                  moves: pokemon.moves,
                },
              ])
              setList(pokemons)
            })
        )
      )
  }

  const pokemonDetails = async (pokemon) => {
    dispatch({
      type: 'setPokemon',
      payload: {
        pokemon: pokemon,
      },
    })

    const pokemonEvo = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`
    )
      .then((res) => res.json())
      .then((r) => fetch(r.evolution_chain.url))
      .then((r) => r.json())
      .then((r) =>
        dispatch({
          type: 'setPokemonEvolucao',
          payload: {
            pokemonEvolucao: [
              {
                name: r.chain.species.name,
                level: 0,
                id: r.chain.species.url.substr(-5).replace(/[^0-9]/g, ''),
              },
              {
                name: r.chain.evolves_to[0].species.name,
                level: r.chain.evolves_to[0].evolution_details[0].min_level,
                id: r.chain.evolves_to[0].species.url
                  .substr(-5)
                  .replace(/[^0-9]/g, ''),
              },
              {
                name: r.chain.evolves_to[0].evolves_to[0]?.species.name,
                level:
                  r.chain.evolves_to[0].evolves_to[0]?.evolution_details[0]
                    .min_level,
                id: r.chain.evolves_to[0].evolves_to[0]?.species.url
                  .substr(-5)
                  .replace(/[^0-9]/g, ''),
              },
            ],
          },
        })
      )

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

  const handlePokemonInfo = (pokemon) => {
    pokemonDetails(pokemon)
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
          img={item.image}
          name={item.name}
          type01={item.type01}
          type02={item.type02}
          bg={`${colorOfSpecies(item.type01)}88`}
        />
      </View>
    </Animatable.View>
  )

  useEffect(() => {
    getAllpokemons(5)
  }, [])

  useEffect(() => {
    if (searchText === '') {
      setList(pokemons)
    } else {
      console.log('bateu aqui')
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
        alignItems: 'center',
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
          buttonPress={() => setVisible(!visible)}
        />
      </View>

      <Modal visible={visible} onPress={() => setVisible(!visible)} />

      {pokemons && (
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          numColumns={2}
          // Performance settings
          removeClippedSubviews={true} // Unmount components when outside of window
          initialNumToRender={2} // Reduce initial render amount
          maxToRenderPerBatch={1} // Reduce number in each render batch
          updateCellsBatchingPeriod={100} // Increase time between renders
          windowSize={7} // Reduce the window size
        />
      )}
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
    width: (Dimensions.get('window').width - 20) / 2,
    marginTop: 30,
    marginBottom: 30,
  },
})

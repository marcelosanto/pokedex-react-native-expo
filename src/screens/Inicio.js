import React from 'react'
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
} from 'react-native'

import { colorOfSpecies } from '../../Data'
import { UserContext } from '../context/UserContext'

export default ({ navigation }) => {
  const { state, dispatch } = React.useContext(UserContext)
  const [pokemons, setPokemons] = React.useState([])

  const fetchAllPokemon = async () => {
    await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
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

      return true
    }
  }

  const handlePokemonInfo = async (pokemon) => {
    const res = await pokemonDetails(pokemon)

    if (res) {
      navigation.reset({
        index: 1,
        routes: [{ name: 'TabNavigator' }],
      })
    }

    //console.log(res)
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handlePokemonInfo(item)}
      key={item.id}
      style={[
        styles.container,

        {
          backgroundColor: colorOfSpecies(item.types[0].type.name),
        },
      ]}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 20,
        }}
      >
        <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.textLabel}>{item.types[0].type.name}</Text>
          {item.types[1] && (
            <Text style={styles.textLabel}>{item.types[1]?.type.name}</Text>
          )}
        </View>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'space-between' }}>
        <View>
          <Text
            style={{
              marginTop: 30,
              fontSize: 20,
              color: '#FFF',
              fontWeight: 'bold',
            }}
          >
            #{item.id < 10 ? '00' + item.id : '0' + item.id}
          </Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: item.sprites.other['official-artwork'].front_default,
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView>
      <Text>Lista de pokemons</Text>
      <FlatList
        data={pokemons}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        OnPress={() => console.log('funfou')}
      />

      {/*  */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    paddingTop: StatusBar.currentHeight,
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
    height: 150,
    width: 150,
  },
})
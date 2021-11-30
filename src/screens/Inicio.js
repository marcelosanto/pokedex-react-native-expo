import React from 'react'
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native'

import { colorOfSpecies } from '../../Data'

export default ({ name, typesOne, typesTwo, image, id }) => {
  const [pokemons, setPokemons] = React.useState([])

  async function fetchKantoPokemon() {
    await fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
      .then((response) => response.json())
      .then(function (allpokemon) {
        allpokemon.results.forEach(function (pokemon) {
          fetchPokemonData(pokemon)
        })
      })
  }

  let pokemonArray = []

  async function fetchPokemonData(pokemon) {
    let url = pokemon.url // <--- this is saving the pokemon url to a variable to use in the fetch.
    //Example: https://pokeapi.co/api/v2/pokemon/1/"

    await fetch(url)
      .then((response) => response.json())
      .then(function (pokeData) {
        //console.log(pokeData)
        setPokemons((oldData) => [...oldData, pokeData])
      })
  }

  React.useEffect(() => {
    fetchKantoPokemon()
  }, [])

  return (
    <ScrollView>
      {pokemons.length > 0 ? (
        pokemons.map((pokemon) => (
          <View
            key={pokemon.id}
            style={[
              styles.container,

              {
                backgroundColor: colorOfSpecies(pokemon.types[0].type.name),
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
              <View
                style={{ flexDirection: 'column', alignItems: 'flex-start' }}
              >
                <Text style={styles.text}>{pokemon.name}</Text>
                <Text style={styles.textLabel}>
                  {pokemon.types[0].type.name}
                </Text>
                {pokemon.types[1] && (
                  <Text style={styles.textLabel}>
                    {pokemon.types[1]?.type.name}
                  </Text>
                )}
              </View>
            </View>
            <View
              style={{ alignItems: 'center', justifyContent: 'space-between' }}
            >
              <View>
                <Text
                  style={{
                    marginTop: 30,
                    fontSize: 20,
                    color: '#FFF',
                    fontWeight: 'bold',
                  }}
                >
                  #{pokemon.id < 10 ? '00' + pokemon.id : '0' + pokemon.id}
                </Text>
              </View>
              <View>
                <Image
                  style={styles.image}
                  source={{
                    uri: pokemon.sprites.other['official-artwork']
                      .front_default,
                  }}
                />
              </View>
            </View>
          </View>
        ))
      ) : (
        <View>
          <Text>Caregando</Text>
        </View>
      )}
    </ScrollView>
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

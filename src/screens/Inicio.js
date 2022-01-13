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
  VirtualizedList,
} from 'react-native'
import { CommonActions } from '@react-navigation/native'

import { UserContext } from '../context/UserContext'
import PokemonCardList from '../components/PokemonCardList'
import Header from '../components/Header'
import SearchInput from '../components/SearchInput'
import Modal from '../components/Modal'
import Api from '../utils/Api'

export default ({ navigation }) => {
  const { state, dispatch } = useContext(UserContext)
  const [pokemons, setPokemons] = useState(
    state.pokemons.sort((a, b) => a.id - b.id)
  )
  const [list, setList] = useState([])
  const [searchText, setSearchText] = useState('')
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(false)

  const pokemonDetails = async (pokemon) => {
    dispatch({
      type: 'setPokemon',
      payload: {
        pokemon: pokemon,
      },
    })

    const pokemonDetails = await Api.getPokemonInfo(pokemon.id)

    if (pokemonDetails.length > 0) {
      dispatch({
        type: 'setPokemonDetails',
        payload: {
          pokemonDetails: pokemonDetails,
        },
      })

      navigation.dispatch(CommonActions.navigate('TabNavigator'))
    }
  }

  const handlePokemonInfo = (pokemon) => {
    pokemonDetails(pokemon)
  }

  const renderItem = ({ item, index }) => (
    <View style={styles.listItem}>
      <PokemonCardList
        onPress={() => handlePokemonInfo(item)}
        item={item}
        index={index}
      />
    </View>
  )

  useEffect(() => {
    if (searchText === '') {
      console.log('rodou aqui?')
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
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          horizontal={false}
          numColumns={2}
          // Performance settings
          removeClippedSubviews={true} // Unmount components when outside of window
          initialNumToRender={10} // Reduce initial render amount
          maxToRenderPerBatch={10} // Reduce number in each render batch
          updateCellsBatchingPeriod={20} // Increase time between renders
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

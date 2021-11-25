import React from 'react'
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native'
import { pokemon, egggroup } from '../Data'

export default () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 20,
        }}
      >
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <Text style={styles.text}>{pokemon.forms[0].name}</Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-around' }}
          >
            <Text style={styles.textLabel}>{pokemon.types[0].type.name}</Text>
            <Text style={styles.textLabel}>{pokemon.types[1].type.name}</Text>
          </View>
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
            #{pokemon.id}
          </Text>
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Image
          style={styles.image}
          source={{ uri: pokemon.sprites.other.official_artwork.front_default }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: egggroup.color.name ? egggroup.color.name : 'blue',
    paddingTop: StatusBar.currentHeight,
    flexDirection: 'column',
    justifyContent: 'space-between',
    elevation: 1,
  },
  text: {
    fontSize: 40,
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  textLabel: {
    borderRadius: 100,
    width: 60,
    textAlign: 'center',
    backgroundColor: '#FFF',
    opacity: 0.5,
    marginLeft: 15,
    color: 'black',
    textTransform: 'capitalize',
  },
  image: {
    height: 150,
    width: 150,
    marginBottom: -20,
  },
})

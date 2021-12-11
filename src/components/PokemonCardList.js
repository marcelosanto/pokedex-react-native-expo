import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native'

import { colorOfSpecies } from '../../Data'

export default ({ id, img, name, type01, type02, bg, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={[styles.card, { backgroundColor: bg }]}>
        <Image style={styles.image} source={{ uri: img }} />
        <View style={{ width: '100%', marginLeft: 40, marginBottom: 20 }}>
          <Text style={styles.title}>
            {id < 10 ? '#00' + id : id < 100 ? '#0' + id : '#' + id}
          </Text>
          <Text style={styles.title}>{name}</Text>
        </View>

        {type02 ? (
          <View style={styles.types}>
            <Text
              style={[
                styles.textLabel,
                { backgroundColor: colorOfSpecies(type01) },
              ]}
            >
              {type01}
            </Text>

            <Text
              style={[
                styles.textLabel,
                { backgroundColor: colorOfSpecies(type02) },
              ]}
            >
              {type02}
            </Text>
          </View>
        ) : (
          <View style={[styles.types, { justifyContent: 'flex-start' }]}>
            <Text
              style={[
                styles.textLabel,
                { backgroundColor: colorOfSpecies(type01) },
              ]}
            >
              {type01}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  card: {
    width: 300,
    height: 200,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 30,
  },
  image: { width: 150, height: 150, marginTop: -40 },
  title: { fontSize: 30, fontWeight: 'bold' },
  types: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  textLabel: {
    borderRadius: 100,
    width: 100,
    textAlign: 'center',
    backgroundColor: '#DDA0DD',
    opacity: 1,
    marginLeft: 15,
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginBottom: 20,
    marginTop: 20,
  },
})

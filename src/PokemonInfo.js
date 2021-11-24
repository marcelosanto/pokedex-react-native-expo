import React from 'react'
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native'

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
          <Text style={styles.text}>Bulbasaur</Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-around' }}
          >
            <Text style={styles.textLabel}>Grass</Text>
            <Text style={styles.textLabel}>Poison</Text>
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
            #001
          </Text>
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Image style={styles.image} source={require('../assets/R.png')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: 'green',
    paddingTop: StatusBar.currentHeight,
    flexDirection: 'column',
    justifyContent: 'space-between',
    elevation: 1,
  },
  text: {
    fontSize: 40,
    color: '#FFF',
    fontWeight: 'bold',
  },
  textLabel: {
    borderRadius: 100,
    width: 60,
    textAlign: 'center',
    backgroundColor: '#FFF',
    opacity: 0.5,
    marginLeft: 15,
    color: '#fff',
    textTransform: 'capitalize',
  },
  image: {
    height: 150,
    width: 150,
    marginBottom: -20,
  },
})

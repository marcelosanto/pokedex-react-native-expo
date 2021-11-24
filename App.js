import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'
import PokemonInfo from './src/PokemonInfo'
import Home from './src/Home'

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{ width: '100%', flex: 1, marginTop: 64, alignItems: 'center' }}
      >
        <Text>Home Screen</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Music')
          }}
        >
          <Text style={{ color: '#FFF' }}>Go to the MusicScreen </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

function MusicScreen({ navigation }) {
  let [liked, setLiked] = React.useState(false)

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <FontAwesome
            name='heart'
            size={24}
            color='#FFF'
            style={{ marginRight: 16 }}
          />
        </TouchableOpacity>
      ),
    })
  })

  return (
    <View style={styles.container}>
      <View
        style={{ width: '100%', flex: 1, marginTop: 64, alignItems: 'center' }}
      >
        <Text>Music Screen</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Home')
          }}
        >
          <Text style={{ color: '#FFF' }}>Go to the HomeScreen </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            {
              borderColor: '#23A6d9',
              borderWidth: 1,
              marginTop: 12,
              backgroundColor: '#FFF',
            },
          ]}
          onPress={() => {
            navigation.goBack()
          }}
        >
          <Text style={{ color: '#23A6d9' }}>Go Back </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Main = createNativeStackNavigator()

export default function App() {
  return (
    <Home />

    // <NavigationContainer>
    //   <Main.Navigator
    //     screenOptions={{
    //       headerStyle: {
    //         backgroundColor: '#23a6d9',
    //       },
    //       headerTintColor: '#FFF',
    //       headerTitleStyle: {
    //         fontWeight: '200',
    //         fontSize: 30,
    //       },
    //     }}
    //   >
    //     <Main.Screen name='Home' component={HomeScreen} />
    //     <Main.Screen name='Music' component={MusicScreen} />
    //   </Main.Navigator>
    // </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 32,
    backgroundColor: '#23A6D9',
    paddingVertical: 12,
    width: 258,
    borderRadius: 12,
    alignItems: 'center',
  },
})

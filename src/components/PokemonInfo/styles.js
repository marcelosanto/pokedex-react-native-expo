import { StyleSheet, StatusBar } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    height: 285,
    backgroundColor: 'transparent',
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
    width: 90,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#FFF',
    opacity: 0.5,
    marginLeft: 15,
    color: 'black',
    textTransform: 'capitalize',
  },
  image: {
    height: 180,
    width: 180,
  },
})

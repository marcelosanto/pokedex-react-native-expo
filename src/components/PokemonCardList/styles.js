import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 180,
    height: 300,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 30,
  },
  image: { width: 150, height: 150 },
  title: { fontSize: 30, fontWeight: 'bold', textTransform: 'capitalize' },
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

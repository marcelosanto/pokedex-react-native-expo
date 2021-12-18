import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: 300,
  },
  containerTypes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  text: {
    margin: 10,
    color: 'black',
    borderRadius: 100,
    width: 100,
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
})

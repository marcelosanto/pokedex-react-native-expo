import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default () => {
  return (
    <View style={{ flex: 1, marginLeft: 20 }}>
      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <View style={styles.containerDetails}>
          <Text style={styles.text}>Species</Text>
          <Text style={styles.textInfo}>Seed</Text>
        </View>
        <View style={styles.containerDetails}>
          <Text style={styles.text}>Height</Text>
          <Text style={styles.textInfo}> 2'3.6* (0,70cm)</Text>
        </View>
        <View style={styles.containerDetails}>
          <Text style={styles.text}>Weight</Text>
          <Text style={styles.textInfo}>15.2lbs (6.9Kg)</Text>
        </View>
        <View style={styles.containerDetails}>
          <Text style={styles.text}>Abilities</Text>
          <Text style={styles.textInfo}>Overgrow, Chlorophyl</Text>
        </View>
      </View>
      <View style={{}}>
        <Text style={styles.textTitle}>Breeding</Text>

        <View style={styles.containerDetails}>
          <Text style={styles.text}>Gender</Text>
          <Text style={styles.textInfo}>Male and Femea</Text>
        </View>

        <View style={styles.containerDetails}>
          <Text style={styles.text}>Egg Groups</Text>
          <Text style={styles.textInfo}>Monster</Text>
        </View>
        <View style={styles.containerDetails}>
          <Text style={styles.text}>Egg Cycle</Text>
          <Text style={styles.textInfo}>Grass</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerDetails: {
    flexDirection: 'row',
    width: 300,
  },
  text: { marginBottom: 20 },
  textTitle: {
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  textInfo: {
    marginLeft: 80,
  },
})

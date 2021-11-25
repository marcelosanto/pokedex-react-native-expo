import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default () => {
  return (
    <View style={{ flex: 1, marginLeft: 20 }}>
      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <View style={styles.containerDetails}>
          <View style={{ width: 100 }}>
            <Text style={styles.text}>Species</Text>
          </View>

          <View style={{ width: 150 }}>
            <Text style={styles.textInfo}>Seed</Text>
          </View>
        </View>

        <View style={styles.containerDetails}>
          <View style={{ width: 100 }}>
            <Text style={styles.text}>Height</Text>
          </View>
          <View style={{ width: 150 }}>
            <Text style={styles.textInfo}> 2'3.6* (0,70cm)</Text>
          </View>
        </View>
        <View style={styles.containerDetails}>
          <View style={{ width: 100 }}>
            <Text style={styles.text}>Weight</Text>
          </View>
          <View style={{ width: 150 }}>
            <Text style={styles.textInfo}>15.2lbs (6.9Kg)</Text>
          </View>
        </View>
        <View style={styles.containerDetails}>
          <View style={{ width: 100 }}>
            <Text style={styles.text}>Abilities</Text>
          </View>
          <View style={{ width: 150 }}>
            <Text style={styles.textInfo}>Overgrow, Chlorophyl</Text>
          </View>
        </View>
      </View>
      <View style={{}}>
        <Text style={styles.textTitle}>Breeding</Text>

        <View style={styles.containerDetails}>
          <View style={{ width: 100 }}>
            <Text style={styles.text}>Gender</Text>
          </View>
          <View style={{ width: 150 }}>
            <Text style={styles.textInfo}>Male and Femea</Text>
          </View>
        </View>

        <View style={styles.containerDetails}>
          <View style={{ width: 100 }}>
            <Text style={styles.text}>Egg Groups</Text>
          </View>
          <View style={{ width: 150 }}>
            <Text style={styles.textInfo}>Monster</Text>
          </View>
        </View>
        <View style={styles.containerDetails}>
          <View style={{ width: 100 }}>
            <Text style={styles.text}>Egg Cycle</Text>
          </View>
          <View style={{ width: 150 }}>
            <Text style={styles.textInfo}>Grass</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: { marginBottom: 20 },
  textTitle: {
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  textInfo: {},
})

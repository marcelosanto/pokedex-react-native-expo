import React, { useState } from 'react'
import { View, StyleSheet, Text, Button, Modal } from 'react-native'

export default ({ visible, onPress }) => {
  return (
    <View>
      <Modal visible={visible}>
        <View>
          <Text>Eu sou o conteudo da modal</Text>
          <Button title='Fechar modal' onPress={onPress} />
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({})

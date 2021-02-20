import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Game() {
  return (
    <View style={{ paddingTop: 20 }}>
      <Text style={styles.pageTitle}>Game</Text>
      <Text style={styles.subtitle}>Let's play at home</Text>

      <View style={styles.gameContainer}>
        <View style={{
          width: 400,
          height: 800,
          backgroundColor: "wheat",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Text>The game will be here</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  pageTitle: {
    fontSize: 32,
    textAlign: "center",
    marginBottom: 4
  },
  subtitle: {
    fontSize: 18,
    color: "#aaa",
    textAlign: "center"
  },
  gameContainer: {
    height: 600,
    maxHeight: "70%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
})

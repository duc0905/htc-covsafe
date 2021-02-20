import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Manual() {
  return (
    <View>
      <Text style={styles.title}>Manual</Text>
      <Text>
        {
          `Minim eiusmod excepteur et proident elit quis est sit aliquip. Et dolore deserunt minim tempor est et deserunt amet dolor ex nisi ad reprehenderit exercitation. Id magna dolore aliqua do consequat ea et consequat eu cillum cillum laborum aliquip.

Ipsum officia eiusmod fugiat nisi ullamco laborum in. Proident adipisicing commodo ullamco ut enim culpa veniam nisi excepteur pariatur. Quis ut ullamco in elit esse adipisicing incididunt. Esse non id mollit do quis.

Irure magna enim exercitation ad. Ea dolor cupidatat incididunt duis adipisicing laborum esse. Pariatur exercitation reprehenderit quis laboris pariatur. Dolore ad consectetur anim irure magna adipisicing. Ullamco velit ut minim laboris laborum sit nostrud. Et anim commodo aliqua labore amet.

Cillum id veniam aliquip mollit. Laborum id sunt esse et ea aute enim. Ipsum eu enim in excepteur enim minim ut in sint.
          `
        }
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 8
  }
})

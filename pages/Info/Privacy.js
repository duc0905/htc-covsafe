import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Privacy() {
  return (
    <View>
      <Text style={styles.title}>Your privacy</Text>
      <Text>
        {`
      Eu tempor do nisi et deserunt laboris est cupidatat. Et exercitation fugiat dolore minim ipsum. Nisi ut enim non deserunt veniam est aute deserunt.

Laboris deserunt commodo Lorem reprehenderit Lorem do cillum est cupidatat fugiat ex eu excepteur. Ad duis eiusmod officia qui proident exercitation in nostrud. Voluptate reprehenderit cillum ipsum fugiat exercitation sint labore do dolore esse cillum. Amet labore officia ipsum adipisicing esse nulla id eu qui dolor reprehenderit. Excepteur tempor consectetur elit deserunt. Aliquip velit dolor ipsum anim sint irure esse nulla.

Non aute cupidatat commodo et eiusmod aliquip officia. Tempor sunt in in id incididunt fugiat dolore. Adipisicing qui cillum do fugiat nostrud esse reprehenderit minim. Cillum ullamco fugiat voluptate sit eu commodo sunt. Ad ipsum aliqua ipsum cupidatat.

Dolor magna veniam sunt quis do commodo cupidatat do veniam minim sint. Laboris Lorem commodo irure dolore ea qui commodo exercitation do elit sit ut velit ullamco. Nulla sunt excepteur eiusmod mollit reprehenderit dolor proident elit sit qui tempor do. Consectetur labore duis non Lorem consequat et cillum.
      `}
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

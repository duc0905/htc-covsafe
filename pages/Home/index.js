import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import Friend from './Friend'
import Official from './Official'
import Nearby from './Nearby'

export default function Home() {
  // 0: Friend's post
  // 1: Official news
  // 3: Strangers nearby
  const [category, setCategory] = useState(0);

  return (
    <ScrollView style={{ paddingTop: 20 }}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
      </View>

      {/* This is the navigation bar in the Home page */}
      <View style={styles.navbar}>
        <TouchableOpacity style={[styles.navitem, category === 0 && styles.activeItem]} onPress={() => setCategory(0)}>
          <Text style={[styles.navitemContent, category === 0 && styles.activeContent]}>My friends</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navitem, category === 1 && styles.activeItem]} onPress={() => setCategory(1)}>
          <Text style={[styles.navitemContent, category === 1 && styles.activeContent]}>Official news</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.navitem, category === 2 && styles.activeItem]} onPress={() => setCategory(2)}>
          <Text style={[styles.navitemContent, category === 2 && styles.activeContent]}>People nearby</Text>
        </TouchableOpacity>
      </View>

      { category === 0 && <Friend />}
      { category === 1 && <Official />}
      { category === 2 && <Nearby />}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  navbar: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",

  },
  navitem: {
    paddingTop: 10,
    paddingBottom: 10,
    flexGrow: 1
  },
  activeItem: {
    backgroundColor: "#46b1ce",
    borderBottomWidth: 2,
    borderBottomColor: "yellow"
  },
  navitemContent: {
    textAlign: "center",
    color: "black"
  },
  activeContent: {
    color: "white"
  },
  header: {
    height: 40,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6be1ff"
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Cochin"
  }
})

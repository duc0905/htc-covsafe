import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import Navbar from './components/Navbar';
import Home from "./pages/Home"
import Game from "./pages/Game"
import Info from "./pages/Info"
import Map from "./pages/Map"

export default function App() {
  return (
    <NativeRouter>
      <StatusBar style="auto" />
      <View style={styles.container}>

        {/* Main view of the app */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/info">
          <Info />
        </Route>

        <Route path="/map">
          <Map />
        </Route>

        {/* Navigation bar at the bottom */}
        <Navbar />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  pageContent: {
    paddingTop: 20,
  }
});

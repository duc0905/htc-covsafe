import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Link, useLocation, useRouteMatch } from 'react-router-native'

export default function Navbar() {
  const location = useLocation();
  const matchHome = useRouteMatch("/");
  const matchGame = useRouteMatch("/game");
  const matchInfo = useRouteMatch("/info");
  const matchMap = useRouteMatch("/map");

  const isMatchHome = matchHome && matchHome.isExact;
  const isMatchGame = Boolean(matchGame);
  const isMatchInfo = Boolean(matchInfo);
  const isMatchMap = Boolean(matchMap);

  return (
    <View style={styles.root}>
      <Link component={TouchableOpacity} style={[styles.navitem, isMatchHome && styles.activeItem]} to="/">
        <Text style={isMatchHome && styles.activeText}>Home</Text>
      </Link>
      <Link component={TouchableOpacity} style={[styles.navitem, isMatchGame && styles.activeItem]} to="/game">
        <Text style={isMatchGame && styles.activeText}>Game</Text>
      </Link>
      <Link component={TouchableOpacity} style={[styles.navitem, isMatchInfo && styles.activeItem]} to="/info">
        <Text style={isMatchInfo && styles.activeText}>Info</Text>
      </Link>
      <Link component={TouchableOpacity} style={[styles.navitem, isMatchMap && styles.activeItem]} to="/map">
        <Text style={isMatchMap && styles.activeText}>Map</Text>
      </Link>
    </View >
  )
}

const styles = StyleSheet.create({
  root: {
    display: "flex",
    // flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    height: 50,
    backgroundColor: "#fff",
  },
  navitem: {
    width: "25%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  activeItem: {
    backgroundColor: "#c9fffb"
  },
  activeText: {
    color: "#B38269",
    fontWeight: "bold"
  }
})

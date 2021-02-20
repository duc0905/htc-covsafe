import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { Circle } from 'react-native-maps'

const initialRegion = {
  latitude: 43.548,
  longitude: -79.664,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const circles = [
  {
    center: {
      latitude: 43.548,
      longitude: -79.664,
    },
    radius: 100,
    fillColor: "rgba(255, 200, 200, 0.5)"
  },
  {
    center: {
      latitude: 43.548,
      longitude: -79.674,
    },
    radius: 100,
    fillColor: "rgba(255, 200, 200, 0.5)"
  },
  {
    center: {
      latitude: 43.5420,
      longitude: -79.669,
    },
    radius: 50,
    fillColor: "rgba(255, 150, 150, 0.5)"
  },
]

export default function Map() {
  const [region, setRegion] = useState(initialRegion);

  return (
    <View style={{ flexGrow: 1, paddingTop: 20, display: "flex" }}>
      <MapView
        style={{
          flexGrow: 1
        }}
        initialRegion={initialRegion}
        onRegionChange={(region) => setRegion(region)}
      >
        <Text>Lat: {region.latitude}</Text>
        <Text>Lon: {region.longitude}</Text>
        {
          circles.map((circle, index) => <Circle {...circle} strokeColor="rgba(0,0,0,0)" key={`${index}`} />)
        }
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({})

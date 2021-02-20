import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native'
import { Link, Route } from "react-router-native";
import DropDownPicker from 'react-native-dropdown-picker'

import Team from "./Team";
import Manual from "./Manual";
import Privacy from "./Privacy";

const items = [
  {
    label: "First item",
    value: 1
  },
  {
    label: "Second item",
    value: 2
  },
  {
    label: "Third item",
    value: 3
  },
];

export default function Info() {
  return (
    <ScrollView style={{ paddingTop: 20 }}>
      <Text style={styles.titleText}>Important Information</Text>
      {/* <Dropmenu /> */}

      <View style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 20
      }}>
        <View style={styles.section}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Have you been exposed?</Text>
          </View>

          <TouchableOpacity style={styles.link} onPress={() => Linking.openURL('https://covid-19.ontario.ca/exposed')}>
            <Text>What to do if you've been exposed to COVID-19</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
            <Text>A hospital nearby</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link} onPress={() => Linking.openURL('https://covid-19.ontario.ca/covid-19-test-and-testing-location-information')}>
            <Text>Nearby testing centre</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Medical Essentials</Text>
          </View>
          <TouchableOpacity style={styles.link} onPress={() => Linking.openURL('https://www.canada.ca/en/health-canada/services/drugs-health-products/covid19-industry/medical-devices/personal-protective-equipment/medical-masks-respirators.html')}>
            <Text >
              Masks & Gloves
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
            <Text>Hand sanitizer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link} onPress={() => Linking.openURL('https://www.canada.ca/en/public-health/services/publications/diseases-conditions/coronavirus-disease-covid-19-how-to-self-isolate-home-exposed-no-symptoms.html')}>
            <Text>Over the counter meds & Other essentials</Text>
          </TouchableOpacity>
        </View>

        {/* DONT ADD LINK TO BELOW TEXT */}
        <View style={styles.section}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>About us</Text>
          </View>
          <Link component={TouchableOpacity} to="/info/team" style={styles.link}>
            <Text>Our team</Text>
          </Link>
          <Link component={TouchableOpacity} to="/info/manual" style={styles.link}>
            <Text>How this app works</Text>
          </Link>
          <Link component={TouchableOpacity} to="/info/privacy" style={styles.link}>
            <Text>Your privacy</Text>
          </Link>
        </View>
      </View>

      <View style={styles.subpageContainer}>
        <Route path="/info/team">
          <Team />
        </Route>
        <Route path="/info/manual">
          <Manual />
        </Route>
        <Route path="/info/privacy">
          <Privacy />
        </Route>
      </View>
    </ScrollView>
  )
}

function Dropmenu() {
  return (
    <>
      <View style={styles.postContainer}>
        <View style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "stretch", marginBottom: 10 }}>
          <DropDownPicker
            items={[
              { label: 'Item 1', value: "https://covid-19.ontario.ca/exposed" },
              { label: 'Item 2', value: 'item2' },
            ]}
            containerStyle={{ height: 40 }}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  pageTitle: {
    padding: 10,
    backgroundColor: "#6be1ff",
    fontSize: 20,
    textAlign: "center"
  },
  section: {
    borderRadius: 8,
    backgroundColor: "#eee",
    width: 400,
    maxWidth: "90%",
    marginTop: 16,
    maxWidth: 350,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  sectionTitleContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#000"
  },
  sectionTitle: {
    fontSize: 18,
  },
  link: {
    padding: 10,
  },
  subpageContainer: {
    padding: 20
  },
  titleText: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Cochin",
    marginTop: 16,
    marginBottom: 8
  }
})

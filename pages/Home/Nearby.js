import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import Cow from "../../assets/cow.png";
import Starfish from "../../assets/starfish.png";
import Octopus from "../../assets/octopus.png";
import Fox from "../../assets/fox.png";

export default function Nearby() {
  return (
    <View style={styles.container} >
      <Text style={styles.titleText}> How Are The People In Your Area Your Doing?
      </Text>

      <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap" }}>
        <UserPost />

        <Post name="Anon Cow" content="385 Palsey Rd West Mississauga ON L5Z 4A8, 8 people in our buidling have tested positive" />
        <Post name="Anon Fox" content="866 Calder Rd Mississauga ON L5J 2N7, Stay home and be positive :)" pictureSource={Fox} />
        <Post name="Anon Octopus" content="1496 Hampshire Cres Mississauga ON L5G 4P7, Our neighbour just tested positive, we are going to test ourselves asap" pictureSource={Octopus} />
        <Post name="Anon Starfish" content="718 Hidden Grove Lane Mississauga ON L5H 4L2, I am quarantining at a hotel after my wife has tested positive " pictureSource={Starfish} />
        <Post name="Anon Cow" content="385 Palsey Rd West Mississauga ON L5Z 4A8, 8 people in our buidling have tested positive" />
        <Post name="Anon Octopus" content="1496 Hampshire Cres Mississauga ON L5G 4P7, Our neighbour just tested positive, we are going to test ourselves asap" pictureSource={Octopus} />
        <Post name="Anon Starfish" content="718 Hidden Grove Lane Mississauga ON L5H 4L2, I am quarantining at a hotel after my wife has tested positive " pictureSource={Starfish} />
        <Post name="Anon Fox" content="866 Calder Rd Mississauga ON L5J 2N7, Stay home and be positive :)" pictureSource={Fox} />
      </View>
      <View style={{ height: 40 }} />
    </View>
  )
}

function Post({ name, content, pictureSource }) {
  return (
    <View style={styles.postContainer}>
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "stretch", marginBottom: 10 }}>
        <Image style={styles.tinyLogo} source={pictureSource || Cow} />
        <View>
          <Text style={styles.postText}>{name}</Text>
          <Text style={{ color: "#666", fontSize: 12 }}>1 min ago</Text>
        </View>
      </View>
      <Text>{content}</Text>
    </View>
  )
}

function UserPost() {
  return (
    <View style={[styles.postContainer, {
      backgroundColor: "white",
      borderWidth: 1,
      borderColor: "#666"
    }]}>
      <View style={{ display: "flex", flexDirection: "column-reverse", justifyContent: "flex-end", alignItems: "stretch", marginBottom: 20 }}>
        <Text style={[{ color: "#666", fontSize: 10, textAlign: 'left' }, styles.userpostText]}>What do you wanna share...?</Text>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  postContainer: {
    backgroundColor: '#eee',
    borderRadius: 8,
    marginTop: 16,
    padding: 16,
    maxWidth: 400,
    flexShrink: 1,
    flexBasis: 400
  },
  tinyLogo: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 8
  },
  logo: {
    width: 10,
    height: 10,
  },
  titleText: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Cochin",
    marginTop: 16,
    marginBottom: 8
  },
  postText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Cochin"
  },
  userpostText: {
    fontSize: 10,
    fontWeight: "bold",
  }
})


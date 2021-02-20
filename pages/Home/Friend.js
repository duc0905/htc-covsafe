import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import DOGO from "../../assets/dog.png";
import CATO from "../../assets/cat.jpg";
import BIRD from "../../assets/bird.png";
import PIG from "../../assets/pig.png";
import Deer from "../../assets/deer.png";

export default function Friend() {
  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.titleText}> How Are Your Friends Doing?</Text>

      <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap", paddingLeft: 10, paddingRight: 10 }}>
        <UserPost />

        <Post name="Shivani Anand" content="Ottawa ON L5J 0A4, My family and I are completely fine! Stay safe everyone" pictureSource={BIRD} />
        <Post name="Anh Nguyen" content="177 Dundas St W Goodwood ON L5B 4M5, Stay safe and wear masks!!" pictureSource={CATO} />
        <Post name="Minh Duc Le" content="2251 Hensall St Calgary ON L5A 2S6, Getting discharged tomorrow!" />
        <Post name="Shivani Anand" content="Ottawa ON L5J 0A4, My family and I are completely fine! Stay safe everyone" pictureSource={BIRD} />
        <Post name="Syeda Mehdi" content="Mississauga Lake Buckhorn ON, Our neighbour just tested positive, we are going to test ourselves asap" pictureSource={PIG} />
        <Post name="Minh Duc Le" content="2251 Hensall St Calgary ON L5A 2S6, Getting discharged tomorrow!" />
        <Post name="Anh Nguyen" content="177 Dundas St W Goodwood ON L5B 4M5, Stay safe and wear masks!!" pictureSource={CATO} />
        <Post name="Syeda Mehdi" content="Mississauga Lake Buckhorn ON, Our neighbour just tested positive, we are going to test ourselves asap" pictureSource={PIG} />

      </View>


      <View style={{ height: 40 }} />
    </SafeAreaView>
  )
}

function Post({ name, content, pictureSource }) {
  return (
    <View style={styles.postContainer}>
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "stretch", marginBottom: 10 }}>
        <Image style={styles.tinyLogo} source={pictureSource || DOGO} />
        <View>
          <Text style={styles.postText}>{name}</Text>
          <Text style={{ color: "#666", fontSize: 12 }}>3 mins ago</Text>
        </View>
      </View>
      <Text>{content}</Text>
    </View>
  )
}

function UserPost() {
  return (
    <View style={{ backgroundColor: "white", borderWidth: 1, borderColor: "#000", flexBasis: 300, padding: 16, borderRadius: 8, marginTop: 16 }}>
      <View style={{ marginBottom: 0 }}>
        <Text style={[{ color: "#666", fontSize: 10, textAlign: 'left' }, styles.userpostText]}> What do you wanna share...?</Text>
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
    flexBasis: 300
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
    paddingLeft: 20,
    paddingRight: 20,
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

import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import SOURCE from "../../assets/covid-cover.jpg"

const data = [
  {
    title: "Today is a sunny day!",
    description: "A beautiful sunny day! Laborum sunt aute qui eu. Amet eiusmod incididunt in ea nisi ad. Laborum nisi mollit enim do voluptate officia irure aliqua aliquip. Incididunt esse aute exercitation sint adipisicing ea anim fugiat est magna id. Culpa Lorem laboris nisi ullamco velit incididunt minim adipisicing minim. Aliqua fugiat mollit aliquip sunt culpa consequat eu consequat eu id officia occaecat sint qui.",
    content: `Nulla mollit deserunt nostrud dolore elit consequat ea. Nostrud excepteur aliquip do esse. Labore consectetur velit dolor fugiat nostrud consequat est ex nisi ipsum. Quis fugiat id do consectetur sint eu minim nulla et laborum aute veniam esse elit. Sit pariatur consequat do culpa nulla in non excepteur dolor. Labore nostrud consectetur dolor labore tempor occaecat sunt excepteur eu sit.

Pariatur sunt reprehenderit est cillum. Labore nisi culpa nostrud nulla in dolor cillum in id. Aliquip elit qui laborum proident est cillum commodo elit eiusmod dolore.

Proident aliqua do in deserunt velit. Eiusmod ex nisi qui id sint occaecat duis duis irure ad minim eiusmod dolor. Aliqua eu non culpa enim do.

Eiusmod consectetur duis aliqua ea. Duis nulla et velit occaecat voluptate ex reprehenderit dolor id ad officia occaecat. Exercitation ad elit minim ullamco exercitation consequat sit enim ea fugiat.`
  },
  {
    title: "Today is a rainy day!",
    description: "A wet rainy day!Elit fugiat duis eu aliqua anim eiusmod consequat eu aliquip nisi in ad eu. Mollit aute velit incididunt tempor occaecat veniam cillum est magna nisi dolore. Nostrud laborum excepteur ipsum consequat commodo nisi. Qui ad dolore proident cupidatat. Excepteur aliqua irure commodo incididunt. Duis ad ipsum non laborum nisi pariatur culpa veniam tempor nostrud anim id consequat ut.",
    content: `Nulla mollit deserunt nostrud dolore elit consequat ea. Nostrud excepteur aliquip do esse. Labore consectetur velit dolor fugiat nostrud consequat est ex nisi ipsum. Quis fugiat id do consectetur sint eu minim nulla et laborum aute veniam esse elit. Sit pariatur consequat do culpa nulla in non excepteur dolor. Labore nostrud consectetur dolor labore tempor occaecat sunt excepteur eu sit.

Pariatur sunt reprehenderit est cillum. Labore nisi culpa nostrud nulla in dolor cillum in id. Aliquip elit qui laborum proident est cillum commodo elit eiusmod dolore.

Proident aliqua do in deserunt velit. Eiusmod ex nisi qui id sint occaecat duis duis irure ad minim eiusmod dolor. Aliqua eu non culpa enim do.

Eiusmod consectetur duis aliqua ea. Duis nulla et velit occaecat voluptate ex reprehenderit dolor id ad officia occaecat. Exercitation ad elit minim ullamco exercitation consequat sit enim ea fugiat.`
  },
  {
    title: "Today is a foggy day!",
    description: "A mysterious foggy day! Cillum occaecat cupidatat anim in magna sint exercitation ipsum sint proident deserunt ullamco. Amet id aliqua elit quis nisi sit velit tempor id velit sunt. Et quis est occaecat ea ut et esse sit veniam sunt culpa nulla. Fugiat dolore ex velit velit ad reprehenderit ea laborum ut cillum duis ut.",
    content: `Nulla mollit deserunt nostrud dolore elit consequat ea. Nostrud excepteur aliquip do esse. Labore consectetur velit dolor fugiat nostrud consequat est ex nisi ipsum. Quis fugiat id do consectetur sint eu minim nulla et laborum aute veniam esse elit. Sit pariatur consequat do culpa nulla in non excepteur dolor. Labore nostrud consectetur dolor labore tempor occaecat sunt excepteur eu sit.

Pariatur sunt reprehenderit est cillum. Labore nisi culpa nostrud nulla in dolor cillum in id. Aliquip elit qui laborum proident est cillum commodo elit eiusmod dolore.

Proident aliqua do in deserunt velit. Eiusmod ex nisi qui id sint occaecat duis duis irure ad minim eiusmod dolor. Aliqua eu non culpa enim do.

Eiusmod consectetur duis aliqua ea. Duis nulla et velit occaecat voluptate ex reprehenderit dolor id ad officia occaecat. Exercitation ad elit minim ullamco exercitation consequat sit enim ea fugiat.`
  },
  {
    title: "Today is a great day!",
    description: "A great day! Sint in labore dolor aliquip occaecat excepteur dolor ad eiusmod.",
    content: `Nulla mollit deserunt nostrud dolore elit consequat ea. Nostrud excepteur aliquip do esse. Labore consectetur velit dolor fugiat nostrud consequat est ex nisi ipsum. Quis fugiat id do consectetur sint eu minim nulla et laborum aute veniam esse elit. Sit pariatur consequat do culpa nulla in non excepteur dolor. Labore nostrud consectetur dolor labore tempor occaecat sunt excepteur eu sit.

Pariatur sunt reprehenderit est cillum. Labore nisi culpa nostrud nulla in dolor cillum in id. Aliquip elit qui laborum proident est cillum commodo elit eiusmod dolore.

Proident aliqua do in deserunt velit. Eiusmod ex nisi qui id sint occaecat duis duis irure ad minim eiusmod dolor. Aliqua eu non culpa enim do.

Eiusmod consectetur duis aliqua ea. Duis nulla et velit occaecat voluptate ex reprehenderit dolor id ad officia occaecat. Exercitation ad elit minim ullamco exercitation consequat sit enim ea fugiat.`
  },
]

export default function Official() {
  const [chosenPost, setChosenPost] = useState(0);

  return (
    <View>
      <Text style={styles.pageTitle}>Official news</Text>

      <ScrollView horizontal>
        {
          data.map(({ description, title }, index) => (
            <PostCard title={title} description={description} handlePress={() => setChosenPost(index)} key={title} />
          ))
        }
      </ScrollView>

      <Article {...data[chosenPost]} />

      <View style={{ height: 40 }} />
    </View>
  )
}

function PostCard({ title, description, handlePress }) {
  return (
    <TouchableOpacity style={styles.postContainer} onPress={handlePress}>
      <Image style={styles.postImage} source={SOURCE} />
      <View style={styles.postContent}>
        <Text style={styles.postTitle}>{title}</Text>
        <Text style={styles.postDescription}>{description}</Text>
      </View>
    </TouchableOpacity>
  )
}

function Article({ title, description, content }) {
  return (
    <View style={styles.articleContainer}>
      <View style={{ maxWidth: 600 }}>
        <Text style={styles.articleTitle}>{title}</Text>
        <Text style={styles.articleDate}>Sat 20 Feb</Text>
        <Text style={styles.articleDescription}>{description}</Text>
        <Image style={styles.articleImage} source={SOURCE} />
        <Text style={styles.articleContent}>{content}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  postContainer: {
    maxWidth: 300,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  pageTitle: {
    fontSize: 28,
    textAlign: "center",
    marginTop: 16,
    marginBottom: 16
  },
  postImage: {
    height: 170,
    width: 300
  },
  postContent: {
    padding: 10
  },
  postTitle: {
    fontSize: 20,
    marginBottom: 8
  },
  postDescription: {
    fontSize: 13
  },
  articleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    paddingLeft: 20,
    paddingRight: 20
  },
  articleTitle: {
    fontSize: 24
  },
  articleDate: {
    fontSize: 12,
    marginBottom: 8
  },
  articleDescription: {
    marginBottom: 8,
    fontStyle: "italic"
  },
  articleImage: {
    maxWidth: "100%",
    marginTop: 16,
    marginBottom: 16
  },
  articleContent: {
    fontSize: 16
  },
})

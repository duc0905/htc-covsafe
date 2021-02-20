import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Team() {
  return (
    <View>
      <Text style={styles.title}>Our team</Text>
      <Text>
        {
          `Laboris nulla minim enim voluptate esse. Esse ullamco ex veniam incididunt in et laboris laboris anim exercitation est exercitation sunt. Consequat ad deserunt ullamco pariatur sit aute voluptate duis laborum amet ut mollit mollit. Deserunt ipsum consectetur sunt excepteur aute. Veniam incididunt exercitation velit deserunt magna commodo qui culpa. Dolor ullamco enim occaecat laboris ut irure ad enim reprehenderit sunt quis voluptate sit eu. Ea nulla irure consectetur aliquip ad.

Eu elit incididunt laborum aliqua cillum occaecat enim labore adipisicing in. Elit mollit irure culpa ea. Est do adipisicing dolor laboris pariatur excepteur enim sint sit fugiat duis laboris proident qui. Velit ullamco aute pariatur dolor.

Fugiat cillum aute aute ipsum id proident cupidatat pariatur aute qui elit. Esse excepteur esse deserunt aliqua eiusmod sunt proident duis anim. Cillum ipsum reprehenderit aliquip qui laborum.

Nostrud voluptate do sint et. Nisi commodo tempor nulla exercitation amet nisi consequat ea voluptate qui ut sint nulla deserunt. Aliqua voluptate tempor mollit minim et enim nostrud culpa dolore fugiat ad sunt. Dolor aute duis dolor pariatur. Pariatur anim dolore adipisicing nostrud. Officia occaecat ad exercitation reprehenderit laborum labore et sint velit laborum irure ex.
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

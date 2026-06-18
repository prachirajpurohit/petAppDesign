import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import HomeScreen from './src/HomeScreen'

export default function App() {
  return (
    <SafeAreaView style={style.root}>
      <HomeScreen />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  root: {
    flex: 1
  }
})
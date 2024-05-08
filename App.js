import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigator from './src/AppNavigator'
import { Provider } from 'react-redux'
import MainContainer from './src/MainContainer'
import Store from './src/redux/store/Store'

const App = () => {
  return (
    <Provider store={Store}>
      <MainContainer/>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
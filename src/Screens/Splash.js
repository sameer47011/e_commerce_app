import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Splash = () => {
  const navigation = useNavigation()
  useEffect(() => {
    setTimeout(() => {
      getData()
    }, 3000);
  }, [])
  const getData = async () => {
    const email = await AsyncStorage.getItem('EMAIL');
    if (email !== '' || email !== null || email !== undefined) {
      navigation.navigate('Home')
    } else {
      navigation.navigate('Login')

    }
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
      <Image source={require('../images/playstore.png')} style={{ height: 200, width: 200, borderRadius: 100, resizeMode: 'contain' }} />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})
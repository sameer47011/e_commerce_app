import { Image, StyleSheet, Text, View, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '../Common/CustomTextInput'
import CustomButton from '../Common/CustomButton'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loader from '../Common/Loader'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bademail, setBademail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);

  const [modalVisible, setModalVisible] = useState(false)

  const loginn = () => {
    setModalVisible(true)
    if (email == '') {
      setBademail(true)
      setModalVisible(false)

    } else {
      setBademail(false)
      if (password == '') {
        setModalVisible(false)
        setBadPassword(true)
      } else {
        setTimeout(() => {
          setBadPassword(false);
          getData();
        }, 2000);
      }
    }
  }

  const getData = async () => {
    const mEmail = await AsyncStorage.getItem('EMAIL');
    const mPass = await AsyncStorage.getItem('PASSWORD');
    console.log(mEmail, mPass)
    if (email === mEmail && mPass === password) {
      setModalVisible(false)
      navigation.navigate('Home');
    } else {
      // Alert.alert('Wrong Password')
      setModalVisible(false)

    }
  }
  const navigation = useNavigation();
  return (
    <View>
      <Image source={require('../images/LoginLogo.png')} style={{ height: 100, width: 100, alignSelf: 'center', marginTop: 50, borderRadius: 50 }} />
      <Text style={{ alignSelf: 'center', marginTop: 50, fontSize: 24, color: '#000', fontWeight: 'bold' }}>Login</Text>
      <CustomTextInput value={email} onChangeText={(txt) => { setEmail(txt) }} placeHolder={'Enter Your Email'} icon={require('../images/email.png')} />
      {
        bademail === true && (
          <Text style={{ color: 'red', paddingLeft: 30, marginTop: 10 }}>Please Enter Your Email</Text>
        )
      }
      <CustomTextInput value={password} onChangeText={(txt) => { setPassword(txt) }} placeHolder={'Enter Your Passwrod'} icon={require('../images/lock.png')} type={'password'} />
      {
        badPassword === true && (
          <Text style={{ color: 'red', paddingLeft: 30, marginTop: 10 }}>Please Enter Your password</Text>
        )
      }
      <CustomButton title={'Login'} bgColor={'#000'} textColor={'#fff'} onPress={() => { loginn() }} />
      <Text style={{ textDecorationLine: 'underline', alignSelf: 'center', marginTop: 20, fontSize: 18, fontWeight: 'bold', color: '#000' }} onPress={() => { navigation.navigate('Signup') }}>Create New Account?</Text>
      <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />

    </View>
  )
}

export default Login

const styles = StyleSheet.create({})
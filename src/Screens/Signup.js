import { StyleSheet, Text, View, TextInput, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../Common/CustomButton'
import CustomTextInput from '../Common/CustomTextInput'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Signup = () => {
  const [name, setName] = useState('');
  const [badName, setBadName] = useState(false);
  const [email, setEmail] = useState('');
  const [bademail, setBademail] = useState(false)
  const [mobile, setMobile] = useState('')
  const [badMobile, setBadMobile] = useState(false)
  const [password, setPassword] = useState('');
  const [badPassword, setBadPassword] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')
  const [badConfirmPassword, setBadConfirmPassword] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const navigation = useNavigation();
  const signupp = () => {
    setButtonDisabled(true);
    if (name == '') {
      setBadName(true)
      setButtonDisabled(false)

    } else {
      setBadName(false)
      if (email == '') {
        setBademail(true)
        setButtonDisabled(false)

      } else {
        setBademail(false)
        if (mobile == '') {
          setBadMobile(true)
          setButtonDisabled(false)

        }
        else if (mobile.length < 10) {
          setBadMobile(true)
          setButtonDisabled(false)

        }
        else {
          setBadMobile(false)
          if (password == '') {
            setBadPassword(true)
            setButtonDisabled(false)

          } else {
            setBadPassword(false)
            if (confirmPassword == '') {
              setConfirmPassword(true)
            } else {
              setConfirmPassword(false)
            }
            if (password !== confirmPassword) {
              setBadConfirmPassword(true);
              setButtonDisabled(false)

            } else {
              setBadConfirmPassword(false)
              saveData()
            }
          }
        }
      }
    }
 }

  const saveData =async () => {
await AsyncStorage.setItem('NAME',name);
await AsyncStorage.setItem('EMAIL',email);
await AsyncStorage.setItem('MOBILE',mobile);
await AsyncStorage.setItem('PASSWORD',password);
navigation.goBack();

  }
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1 }}>
        <Image source={require('../images/LoginLogo.png')} style={{ height: 100, width: 100, alignSelf: 'center', marginTop: 50, borderRadius: 50 }} />
        <Text style={{ alignSelf: 'center', marginTop: 50, fontSize: 24, color: '#000', fontWeight: 'bold' }}>Create New Account</Text>
        <CustomTextInput value={name} onChangeText={(text) => { setName(text) }} placeHolder={'Enter Your Name'} icon={require('../images/user.png')} />
        {
          badName == true && (
            <Text style={{ color: 'red', paddingLeft: 30, marginTop: 10 }}>Please Enter Name</Text>

          )
        }
        <CustomTextInput value={email} onChangeText={(text) => { setEmail(text) }} placeHolder={'Enter Your Email'} icon={require('../images/email.png')} />
        {
          bademail === true && (
            <Text style={{ color: 'red', paddingLeft: 30, marginTop: 10 }}>Please Enter Email Id</Text>
          )
        }
        <CustomTextInput value={mobile} keyboardType={'number-pad'} onChangeText={(text) => { setMobile(text) }} placeHolder={'Enter Your Mobile Number'} icon={require('../images/smartphone1.png')} />
        {
          badMobile == true && (
            <Text style={{ color: 'red', paddingLeft: 30, marginTop: 10 }}>Please Valid Mobile Number </Text>

          )
        }
        <CustomTextInput value={password} onChangeText={(text) => { setPassword(text) }} placeHolder={'Enter Your Passwrod'} icon={require('../images/lock.png')} type={'password'} />
        {
          badPassword == true && (
            <Text style={{ color: 'red', paddingLeft: 30, marginTop: 10 }}>Please Enter Passwrod</Text>

          )
        }
        <CustomTextInput value={confirmPassword} onChangeText={(text) => { setConfirmPassword(text) }} placeHolder={'Enter Confirm Passwrod'} icon={require('../images/lock.png')} type={'password'} />
        {
          badConfirmPassword == true && (
            <Text style={{ color: 'red', paddingLeft: 30, marginTop: 10 }}>Please Enter Correct Password</Text>

          )
        }
        <CustomButton disabled={buttonDisabled} title={'Sign Up'} bgColor={buttonDisabled?'8e8e8e':'#000'} textColor={'#fff'} onPress={() => { signupp() }} />
        <Text style={{ alignSelf: 'center', marginTop: 20, fontSize: 18, fontWeight: 'bold', color: '#000', textDecorationLine: 'underline', marginBottom: 50 }} onPress={() => { navigation.goBack() }}>Already Have Account</Text>

      </View>
    </ScrollView>
  )
}

export default Signup

const styles = StyleSheet.create({})
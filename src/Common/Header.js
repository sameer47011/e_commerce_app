import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={{
      height: 70,
      width: '100%',
      justifyContent: 'space-between',
      flexDirection: 'row',
      borderBottomWidth: 0.2,
      borderBottomColor: '#8e8e8e',
      backgroundColor: '#fff',
      alignItems:'center'

    }}>
       <Text style={{fontSize:20,fontWeight:'600',marginLeft:20,color:'#000'}}>E-Commerce App</Text>

      <TouchableOpacity style={{
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 30,
      }} >
      <Text>Mode</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})
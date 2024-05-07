import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title,onPress,bgColor,textColor,disabled}) => {
  return (
    <TouchableOpacity style={{backgroundColor:bgColor,justifyContent:'center',alignItems:'center',width:'85%',height:50,marginTop:50,borderRadius:10,alignSelf:'center'}}
    disabled={disabled}
    onPress={()=>{
        onPress();
    }}
    >
      <Text style={{color:textColor,fontSize:18,fontWeight:'700'}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({})
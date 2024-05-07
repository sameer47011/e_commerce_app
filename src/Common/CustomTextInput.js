import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React from 'react'

const CustomTextInput = ({ value, onChangeText, placeHolder, icon, type,keyboardType }) => {
    return (
        <View style={{ width: '85%', height: 50, borderWidth: 0.5, borderRadius: 10, alignSelf: 'center', marginTop: 30, flexDirection: 'row', alignItems: 'center', paddingLeft: 20, paddingRight: 20 }}>
            <Image source={icon} style={{ width: 30, height: 30 }} />
            <TextInput value={value} keyboardType={keyboardType?keyboardType:'default'} onChangeText={(txt)=>{onChangeText(txt)}} placeholder={placeHolder} style={{marginLeft:10}} secureTextEntry={type=='password'?true:false} />
        </View>
    )
}

export default CustomTextInput

const styles = StyleSheet.create({})
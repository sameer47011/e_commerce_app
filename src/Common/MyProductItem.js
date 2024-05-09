import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const MyProductItem = ({ item }) => {
    return (
        <View style={{ width: 200, height: 200, borderRadius: 10, elevation: 5, backgroundColor: '#fff', marginLeft: 20, marginBottom: 10 }}>
            <Image source={item.image}
                style={{
                    width: '100%',
                    height: '50%',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10
                }} />
            <Text style={{ marginLeft: 10, marginTop: 10, fontSize: 18, fontWeight: '600', color: '#000' }}>{item.name}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10, marginTop: 10, alignItems: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: '600',}}>{"₹" + item.price}</Text>
                <TouchableOpacity style={{ borderWidth: 1, borderRadius: 10, paddingVertical: 7, paddingHorizontal: 10 }}>
                    <Text style={{fontSize:15,color:'#000'}}>add to cart</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{
                width: 40,
                height: 40,
                backgroundColor: '#fff',
                borderRadius: 20,
                elevation: 5,
                position: 'absolute',
                top: 10,
                right: 10,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image source={require('../images/heart.png')} style={{
                    width: 24,
                    height: 24,
                }} />
            </TouchableOpacity>
        </View>
    )
}

export default MyProductItem

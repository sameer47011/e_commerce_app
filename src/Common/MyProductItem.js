import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const MyProductItem = ({ item, onAddToCart, onAddWishlist }) => {
    return (
        <TouchableOpacity style={{
            borderRadius: 20,
            elevation: 5,
            width: 200,
            backgroundColor: '#fff',
            marginLeft: 10,
            marginBottom: 10,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={{
                width: '100%'
            }}>
                <Image source={item.image}
                    style={{
                        width: '100%',
                        // height: '50%',
                        height: 120,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20
                    }} />
                <Text style={{
                    marginLeft: 10,
                    marginTop: 10,
                    fontSize: 18,
                    fontWeight: '600',
                    color: '#000'
                }}>
                    {item.name}
                </Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingLeft: 10,
                    paddingRight: 10,
                    marginTop: 10,
                    alignItems: 'center',
                    marginBottom: 10
                }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: '600',
                        marginBottom: 10,
                        marginTop: 5,
                        marginLeft: 10
                    }}>
                        {"₹" + item.price}
                    </Text>
                    <TouchableOpacity style={{
                        borderWidth: 0.5,
                        borderRadius: 10,
                        paddingVertical: 7,
                        paddingHorizontal: 10,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                        onPress={() => {
                            onAddToCart(item);
                        }}
                    >
                        <Text style={{ fontSize: 15, color: '#000' }}>Add to cart</Text>
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
                }}
                    onPress={() => {
                        onAddWishlist(item)
                    }}
                >
                    <Image source={require('../images/heart.png')} style={{
                        width: 24,
                        height: 24,
                    }} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default MyProductItem

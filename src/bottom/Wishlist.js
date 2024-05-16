import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../Common/CartItem'
import { addItemToCart, removeFromCart, removeFromWishlist } from '../redux/action/Actions'

const Wishlist = () => {
  const [cartList, setCartList] = useState([])
  const cartData = useSelector(state => state.Reducers2)
  const dispatch = useDispatch()
  return (
    <View style={{ flex: 1, marginBottom: cartData.length === cartData.length - 1 ? 50 : 0 }}>
      {cartData.length > 0 ? (
      <FlatList
        data={cartData}
        renderItem={({ item, index }) => {
          return (
            <CartItem
              item={item}
              isWishlist={'swe'}
              onRemoveFromWishlist={()=>{
                dispatch(removeFromWishlist(index));
              }}
              onAddToCart={(x) => {
                dispatch(addItemToCart(x));
              }} />
          )
        }}
      />
    )
    : (
      <Text style={{textAlign:'center',fontSize:18,marginTop:'50%'}}>Your cart is empty</Text> // Agar cart empty hai toh message dikhate hain
    )}
    </View>
  )
}

export default Wishlist

const styles = StyleSheet.create({}) 
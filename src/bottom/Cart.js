import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../Common/CartItem'
import { addToWishlist, removeFromCart } from '../redux/action/Actions'

const Cart = () => {
  const [cartList, setCartList] = useState([])
  const cartData = useSelector(state => state.Reducers)
  const dispatch = useDispatch()
  return (
    <View style={{ flex: 1, }}>
      {cartData.length > 0 ? (
        <FlatList
          data={cartData}
          renderItem={({ item, index }) => {
            return (
              <CartItem
                item={item}
                onAddWishlist={(x)=>{
                  dispatch(addToWishlist(x))
                }}
                onRemoveItem={() => {
                  dispatch(removeFromCart(index));
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

export default Cart

const styles = StyleSheet.create({})
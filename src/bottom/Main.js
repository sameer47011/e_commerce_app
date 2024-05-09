import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Common/Header'
import { products } from '../Products'
import MyProductItem from '../Common/MyProductItem'

const Main = () => {
  const [categoryList, setCategoryList] = useState([])
  const [tshirtList, setTshirtList] = useState([])
  const [jeansList, setJeansList] = useState([])
  const [shoesList, setshoesList] = useState([])
  const [slipperList, setSlipperList] = useState([])
  const [jacketList, setJacketList] = useState([])

  useEffect(() => {
    let tempCategory = []
    products.category.map(item => {
      tempCategory.push(item);
    })
    // console.log(products);
    setCategoryList(tempCategory);
    setTshirtList(products.category[0].data);
    setJeansList(products.category[1].data);
    setshoesList(products.category[2].data);
    setJacketList(products.category[3].data);
    setSlipperList(products.category[4].data);

  }, [])
  return (
    <ScrollView style={{ flex: 1,marginBottom:50 }} showsVerticalScrollIndicator={false}>

      <View style={{ flex: 1 }}>
        <Header />
        <Image source={require('../images/banner.jpg')} style={{
          width: '94%',
          height: 200,
          borderRadius: 10,
          alignSelf: 'center',
          marginTop: 10
        }} />
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={categoryList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity style={{
                  padding: 10,
                  borderWidth: 1,
                  marginLeft: 20,
                  borderRadius: 20
                }}>
                  <Text style={{ color: '#000' }}>{item.category}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
        <Text style={{
          marginTop: 20, marginLeft: 20, color: '#000', fontSize: 16,
          fontWeight: '600'
        }}>New T shirts</Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={tshirtList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <MyProductItem item={item} />
              )
            }}
          />
        </View>

        <Text style={{
          marginTop: 20, marginLeft: 20, color: '#000', fontSize: 16,
          fontWeight: '600'
        }}>New Jeans</Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={jeansList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <MyProductItem item={item} />
              )
            }}
          />
        </View>

        <Text style={{
        marginTop: 20, marginLeft: 20, color: '#000', fontSize: 16,
        fontWeight: '600'
      }}>New Shoes</Text>
       <View style={{marginTop:20}}>
        <FlatList
        data={shoesList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=>{
          return(
           <MyProductItem item={item}/>
          )
        }}
        />
      </View>

      <Text style={{
        marginTop: 20, marginLeft: 20, color: '#000', fontSize: 16,
        fontWeight: '600'
      }}>New Jacket</Text>
       <View style={{marginTop:20}}>
        <FlatList
        data={jacketList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=>{
          return(
           <MyProductItem item={item}/>
          )
        }}
        />
      </View>

      <Text style={{
        marginTop: 20, marginLeft: 20, color: '#000', fontSize: 16,
        fontWeight: '600'
      }}>New Slipper</Text>
       <View style={{marginTop:20}}>
        <FlatList
        data={slipperList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=>{
          return(
           <MyProductItem item={item}/>
          )
        }}
        />
      </View>
      </View>
    </ScrollView>

  )
}

export default Main

const styles = StyleSheet.create({})
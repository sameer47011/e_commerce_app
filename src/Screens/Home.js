import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Loader from '../Common/Loader'
import Main from '../bottom/Main'
import Search from '../bottom/Search'
import Cart from '../bottom/Cart'
import Wishlist from '../bottom/Wishlist'
import Profile from '../bottom/Profile'
import { useSelector } from 'react-redux'

const Home = () => {
  const [setselectedTab, setSetselectedTab] = useState(0)
  const data = useSelector(state=>state);
  console.log(data);
  return (
    <View style={{ flex: 1 }}>
      {setselectedTab == 0 ? (<Main />) : setselectedTab == 1 ? (<Search />) : setselectedTab == 2 ? (<Cart />) : setselectedTab == 3 ? (<Wishlist />) : (<Profile />)}

      <View style={{
        width: '100%',
        height: 70,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <TouchableOpacity style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
          onPress={() => {
            setSetselectedTab(0)
          }}
        >
          <Image source={require('../images/home.png')} style={{ width: 24, height: 24, tintColor: setselectedTab == 0 ? '#000' : '#8e8e8e' }} />
        </TouchableOpacity>

        <TouchableOpacity style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
          onPress={() => {
            setSetselectedTab(1)
          }}
        >
          <Image source={require('../images/search.png')} style={{ width: 24, height: 24, tintColor: setselectedTab == 1 ? '#000' : '#8e8e8e' }} />
        </TouchableOpacity>

        <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity style={{ width: 44, height: 44, backgroundColor: setselectedTab == 2 ? 'green' : '#000', borderRadius: 22, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => {
              setSetselectedTab(2)
            }}
          >
            <Image source={require('../images/shoppingbag.png')} style={{
              width: 24, height: 24, tintColor
                : '#fff',
            }} />
            <View style={{ width: 20, height: 20, backgroundColor: 'red', borderRadius: 10, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 5, right: 3 }}>
              <Text style={{ color: '#fff', fontWeight: '600' }}>{data.Reducers.length}</Text>
            </View>
          </TouchableOpacity>

        </View>

        <TouchableOpacity style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
          onPress={() => {
            setSetselectedTab(3)
          }}
        >
          <Image source={require('../images/heart.png')} style={{ width: 24, height: 24, tintColor: setselectedTab == 3 ? '#000' : '#8e8e8e' }} />
          <View style={{ width: 20, height: 20, backgroundColor: 'red', borderRadius: 10, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 15, right: 20}}>
            <Text style={{ color: '#fff', fontWeight: '600' }}>{data.Reducers2.length}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
          onPress={() => {
            setSetselectedTab(4)
          }}
        >
          <Image source={require('../images/profile.png')} style={{ width: 24, height: 24, tintColor: setselectedTab == 4 ? '#000' : '#8e8e8e' }} />
        </TouchableOpacity>




      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
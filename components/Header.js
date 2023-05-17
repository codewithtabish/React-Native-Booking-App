import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={{
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'#003580',
        height:60,
        alignItems:'center'


    }}>
    <Pressable style={{flexDirection:'row',justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'white',padding:9,borderRadius:25}}>
    <Ionicons name="bed-outline" size={24} color="white" />
    <Text style={{color:"white",fontSize:15,marginLeft:9}}>Stays</Text>

    </Pressable>
    <Pressable style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}
    >
    <MaterialIcons name="flight-takeoff" size={24} color="white" />
    <Text style={{color:"white",fontSize:15,marginLeft:9}}>Flights</Text>

    </Pressable>
    <Pressable style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}
    >
<AntDesign name="car" size={24} color="white" />
 <Text style={{color:"white",fontSize:15,marginLeft:9}}>Rentals</Text>

    </Pressable>
    <Pressable style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}
    >
<FontAwesome5 name="uber" size={24} color="white" />
 <Text style={{color:"white",fontSize:15,marginLeft:9}}>Taxi</Text>

    </Pressable>


    </View>
  )
}

export default Header

const styles = StyleSheet.create({})
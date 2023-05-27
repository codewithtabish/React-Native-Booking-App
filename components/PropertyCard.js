import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { BottomModal, ModalContent, ModalFooter, ModalTitle, SlideAnimation } from 'react-native-modals';
import {  myfilters } from '../data';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const PropertyCard = ({rooms,children,adults,property,selectedDate,availableRooms,
}) => {
    const navi=useNavigation()

    const {width,height} =Dimensions.get('window')
  return (
    <Pressable style={{margin:10,flexDirection:"row",backgroundColor:"white",alignItems:"center"}}
    onPress={()=>navi.navigate('Info',{
        rooms:rooms,
        children:children,
        selectedDate:selectedDate,
        oldPrice:property.oldPrice,
        newPrice:property.newPrice,
        rating:property.rating,
        photos:property.photos,
        name:property.name,
        adults:adults,
        availableRooms:property.rooms

    })}
    >
    <Image
    style={{width:width/3,height:height/4}}
    source={{uri:property.image}}

    />
    <View style={{padding:10}}>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginHorizontal:1,gap:8,
        marginBottom:6,marginHorizontal:10}}>
            <Text style={{width:'60%',color:"gray",fontSize:16,fontWeight:500,flex:2}}>{property.name}</Text>
            <View style={{marginRight:19,flex:1,
            }}>
            <AntDesign name="hearto" size={24} color="red"  />
            </View>
        </View>
        <View style={{flexDirection:"row",paddingVertical:6,gap:5,alignItems:"center"}}>
        <MaterialIcons name="stars" size={24} color="black" />
        <Text>{property.rating}</Text>
        <Pressable style={{backgroundColor:"#6cb4ee",padding:3,borderRadius:8}}>
            <Text style={{color:"white"}}>Genius level</Text>
        </Pressable>
        </View>
        <Text
        style={{color:"gray",width:'60%',marginVertical:3,fontSize:12}}
        >{property.address.length>50?property.address.slice(0,50):property.address.length}</Text>
    <Text   style={{color:"gray",width:'80%',marginVertical:3,fontSize:12}}>price for 1 Night and {adults} adults</Text>
    <View style={{flexDirection:"row",gap:8,alignItems:"center"}}>
        <Text style={{fontSize:18,fontWeight:"bold",textDecorationLine:"line-through",
        color:"red"}}>{property.oldPrice*adults}</Text>
        <Text style={{color:"gray",fontWeight:500}}>{property.newPrice*adults}</Text>
    </View>
    <View style={{marginTop:5}}>
    <Text  style={{backgroundColor:"#608286",textAlign:"center",padding:3,borderRadius:8,color:"white",width:"50%"}}>limited Time Deal</Text>
    </View>
    </View>

    </Pressable>


  )
}

export default PropertyCard

const styles = StyleSheet.create({})
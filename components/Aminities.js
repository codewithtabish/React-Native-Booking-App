import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { services } from '../data'

const Aminities = () => {
  return (
    <View style={{marginHorizontal:15,}}>
    <Text style={{color:"gray",marginVertical:5}}>Most Popular Facilities</Text>

    <View style={{flexDirection:"row",flexWrap:"wrap",gap:5,
    alignItems:"center"}}>
    {
        services.map((item,index)=>{
            return <View key={index} style={{backgroundColor:"#007fff",paddingHorizontal:6,paddingVertical:3,
            flexDirection:"row",flexWrap:"wrap",paddingVertical:3,borderRadius:8}}>
            <Text style={{color:"white"}}>{item.name}</Text>

            </View>
        })
    }
    </View>
    </View>
  )
}

export default Aminities

const styles = StyleSheet.create({})
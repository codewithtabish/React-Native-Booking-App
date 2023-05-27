import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView from 'react-native-maps'
import {Marker} from 'react-native-maps';
import { useRoute } from '@react-navigation/native'

const MapScreen = () => {
    const ref=useRef()
    const route=useRoute()
    const {searchData} =route?.params
    const coordinates=[]
    const details=searchData?.map((item)=>item.properties.map((propss)=>{
        return coordinates.push({
            latitude:Number(propss.latitude),
            longitude:Number(propss.longitude)
        })
    }))
    useEffect(() => {
        ref.current.fitToCoordinates(coordinates,{
            edgePadding:{
                top:190,
                left:190,
                right:190,
                bottom:190
            }
        })


    }, [])

  return (
    <MapView style={{width:"100%",height:"100%"}}
    ref={ref}
    >
    {
        searchData.map((item)=>item.properties.map((item,index)=>{
    return  <Marker
      key={index}
      coordinate={{latitude:Number(item.latitude),
        longitude:Number(item.longitude)
      }}
      title={item.name}
      description={item.description}
    >
    <Pressable style={{
        backgroundColor:"#003580",
        padding:10,
        borderRadius:10
    }}>
        <Text style={{color:"white"}}>{item.newPrice}</Text>
    </Pressable>
    </Marker>
        }))
    }


    </MapView>

  )
}

export default MapScreen

const styles = StyleSheet.create({})
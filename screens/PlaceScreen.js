import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { data, myfilters } from '../data';
import PropertyCard from '../components/PropertyCard';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { BottomModal, ModalContent, ModalFooter, ModalTitle, SlideAnimation } from 'react-native-modals';
const PlaceScreen = () => {
    const [showModal, setShowModal] = useState(false)
    const [sortedData, setSortedData] = useState(data)
    const route=useRoute()
    const [selectedFilter, setSelectedFilter] = useState()
    const navigation=useNavigation()

    const {rooms,children,adults,place,selectedDate}=route?.params
    const searchPlace=sortedData.filter((item)=>item.place===place)
    useEffect(() => {
        navigation.setOptions({
            title:"Popular Places",
            headerShown:true,
            headerStyle:{
                backgroundColor:"#003580",
                shadowColor:"transparent",
                borderBottomColor:"transparent"
            },
            headerTitleStyle:{
                color:"white",
                fontSize:18,
                fontWeight:"bold"
            }
        })

    }, [])

    const compare=(a,b)=>{
        if(a.newPrice>b.newPrice){
            return -1
        }
        if(a.newPrice<b.newPrice){
            return 1
        }

        return 0

    }

    const compareTwo=(a,b)=>{
        if(a.newPrice<b.newPrice){
            return -1
        }
        if(a.newPrice>b.newPrice){
            return 1
        }

        return 0

    }

   const   applyFilter=()=>{
    setShowModal(!showModal)
    switch(selectedFilter){
        case "cost:High to Low":
            searchPlace.map((item)=>item.properties.sort(compare))
            setSortedData(searchPlace)
            break;
        case "cost:Low to High":
            searchPlace.map((item)=>item.properties.sort(compareTwo))
            setSortedData(searchPlace)
            break;

    }

    }

  return (
    <View>
    <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:'center',
    paddingVertical:13,backgroundColor:"white",paddingHorizontal:20}}>
        <Pressable style={{flexDirection:'row',gap:10}}
        onPress={()=>setShowModal(!showModal)}
        >
        <AntDesign name="swap" size={24} color="black" />
        <Text>Sort</Text>

        </Pressable>
        <Pressable style={{flexDirection:'row',gap:10}}>
        <Ionicons name="filter-outline" size={24} color="black" />
        <Text>Filter</Text>


        </Pressable>
        <Pressable style={{flexDirection:'row',gap:10}}
        onPress={()=>navigation.navigate('Map',{
            searchData:searchPlace
        })}
        >
        <Feather name="map-pin" size={24} color="black" />
        <Text>Map</Text>
        </Pressable>
    </View>
    <ScrollView>
    {
        sortedData.filter((item)=>item.place===place)
        .map((item)=>item.properties.map((item,index)=>{
            return <PropertyCard key={index}
                rooms={rooms}
                children={children}
                adults={adults}
                selectedDate={selectedDate}
                property={item}
                availableRooms={item.rooms}
                showModal={setShowModal}
                setShowModal={setShowModal}
            />
        }))

    }

    </ScrollView>

    <BottomModal
    swipeThreshold={200}
    visible={showModal}
    swipeDirection={['up','down']}
    onHardwareBackPress={()=>setShowModal(!showModal)}
    onTouchOutside={()=>setShowModal(!showModal)}

    modalTitle={<View style={{padding:8,flexDirection:"row",justifyContent:"center",borderBottomWidth:1,
    borderBottomColor:"gray",elevation:2}}><Text>Sort And Filter</Text></View>}c
    footer={
        <Pressable style={{flexDirection:"row",justifyContent:"center",alignItems:"center",
        backgroundColor:"#003580",width:"80%",marginLeft:"auto",marginRight:"auto",padding:8,
        paddingVertical:12,
        borderRadius:8}}
        onPress={applyFilter}
        >
            <Text style={{textAlign:"center",color:"white"}}> Apply</Text>
        </Pressable>
    }
    modalAnimation={new SlideAnimation({
      slideFrom: 'bottom',
    })}

    >
        <ModalContent style={{width:"100%",height:280}}
        >
        <Text style={{textAlign:"center",fontSize:16,fontWeight:600,paddingVertical:10}}>Sort</Text>
        <View>
            {myfilters?.map((item,index)=>{
                return <Pressable
                onPress={()=>setSelectedFilter(item.filter)}
                 key={index} style={{flexDirection:"row",gap:10,alignItems:"center",
                justifyContent:"center",marginVertical:10}}>
                {
                    selectedFilter===item.filter?
                    <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={24} color="red" />:
                    <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={24} color="black" />


                }
                <Text>{item.filter}</Text>

                </Pressable>
            })}
        </View>

        </ModalContent>
    </BottomModal>

    </View>
  )
}

export default PlaceScreen

const styles = StyleSheet.create({})
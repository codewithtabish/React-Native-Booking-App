import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import DatePicker from 'react-native-date-ranges';

const HomeScreen = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  const [rooms, setRooms] = useState(1)
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)
    const navigation=useNavigation()
    useEffect(() => {
        navigation.setOptions({
            headerShown:true,
            title:"Booking.com",
            headerStyle:{
                backgroundColor:"#003580",
                height:110,
                shadowColor:"transparent",
                borderBottomColor:"transparent"
            },
            headerTitleStyle:{
                color:"white",
                fontSize:18,
                fontWeight:"bold"
            },
            headerRight:()=>
            <Ionicons name="ios-notifications-outline" size={24} color="white"
            style={{marginRight:20}}
             />


        })
    
    }, [])

    const customButton=(a)=>{
      return( <Button
            onPress={a}

      style={{
        container:{width:"80%",marginHorizontal:"3%"},
        text:{fontSize:20}

      }}
      primary
      title="SUBMIT"

      />
      )
    }
  return (
    <>
    <Header/>
    <ScrollView>
    {/* DESTINATION */}
    <Pressable style={{margin:20,borderColor:"#ffc72c",borderWidth:3,borderRadius:8}}>

{/* 1 */}
    <Pressable style={{flexDirection:'row',gap:10,paddingVertical:15,paddingHorizontal:10,
    borderColor:"#ffc72c",borderWidth:2,alignItems:"center"}}>
    <AntDesign name="search1" size={24} color="black" />
    <TextInput  placeholder='Enter Your destination'/>

    </Pressable >
    {/* 2 */}
    <Pressable style={{flexDirection:'row',gap:10,paddingVertical:15,paddingHorizontal:10,
    borderColor:"#ffc72c",borderWidth:2,alignItems:"center"}}>
    <Feather name="calendar" size={24} color="black" />
    <DatePicker
    style={{flex:1,height:30,borderColor:"transparent"}}
    placeholder="10 March -> 22 March"
    customStyles={{
      placeholderText:{
        fontSize:16,
        color:"gray",
        flexDirection:'row',
        justifyContent:"center",
        marginRight:"auto"
      },
      contentText:{
        fontSize:16,
        color:"red",
        flexDirection:'row',
        justifyContent:"center",
        marginRight:"auto"

      },
      headerStyle:{
        backgroundColor:"#003580"
      }
    }}
    mode="range"
    selectedBgColor="#0047ab"
    customButton={(a)=>customButton(a)}
    onConfirm={(a,b)=>setSelectedDate(a,b)}

    />


    </Pressable>
    {/* 3 */}
    <Pressable
    style={{flexDirection:'row',gap:10,paddingVertical:15,paddingHorizontal:10,
    borderColor:"#ffc72c",borderWidth:2,alignItems:"center"}}
    >
    <Ionicons name="person-outline" size={24} color="black" />
    <TextInput

    placeholder={`${rooms} rooms - ${adults} adults -${children} children `}
    placeholderTextColor={'red'}

      style={{flex:1}}
    />

    </Pressable>
    {/* 4 */}
    <Pressable
        style={{flexDirection:'row',gap:10,paddingVertical:15,paddingHorizontal:10,
    borderColor:"#ffc72c",borderWidth:2,alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#2a52be"
    }}
    >
    <Text style={{color:"white",fontSize:18}}>Search</Text>

    </Pressable>
    </Pressable>


    </ScrollView>

    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
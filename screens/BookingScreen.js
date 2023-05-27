import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { AntDesign } from '@expo/vector-icons';


const BookingScreen = () => {
  const {savedPlacesArray} =useSelector((state)=>state.Saved)
  return (
    <View style={{paddingVertical:30,paddingHorizontal:20}}>
    {
      savedPlacesArray.length>0 ?
      savedPlacesArray.map((item,index)=>{
        return(
        <Pressable style={{backgroundColor:"white",marginVertical:10,
        elevation:4,padding:10,borderRadius:10}}>
        <View style={{flexDirection:"row",justifyContent:"space-between",
        alignItems:"center",padding:5}}>
        <View>
        <Text style={{color:"black",fontSize:17,fontWeight:"bold",marginBottom:8}}>{item.name.length>25?item.name.slice(0,22):item.name}...</Text>
        <View style={{flexDirection:"row",gap:10,marginVertical:5}}>
        <AntDesign name="staro" size={24} color="green" />
        <Text>{item.rating}</Text>
        <View style={{backgroundColor:"#003580",padding:6,borderRadius:6}}>
            <Text style={{color:"white"}}>Genius level</Text>
        </View>


        </View>
        </View>



        </View>
        </Pressable>
        )

      }):<Text>No
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consequuntur sunt veniam incidunt deserunt illo quae, maxime tenetur dolor, possimus sit quaerat animi officiis inventore minima fuga autem, nostrum omnis?
      NOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</Text>
    }

    </View>
  )
}

export default BookingScreen

const styles = StyleSheet.create({})
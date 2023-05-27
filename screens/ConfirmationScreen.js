import { Pressable, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { savedPlaces } from '../store/SavedReducer';
import ToastManager, { Toast } from 'toastify-react-native'


const ConfirmationScreen = () => {
  const route=useRoute()
  const dispatch=useDispatch()
  const navi=useNavigation()
  const {rooms,children,selectedDate,adults,oldPrice,newPrice,
        rating,photos,name,availableRooms
    } =route?.params
    const bookingFunction=()=>{
      dispatch(savedPlaces(route?.params))
      navi.navigate("Home")
      Toast.success("You booked",name)

    }
  return (
    <View style={{
    padding:0,flex:1,elevation:20}}>
    <Pressable style={{backgroundColor:"white",padding:15}}>
    <View style={{flexDirection:"row",justifyContent:"space-between",
        alignItems:"center",padding:5}}>
        <View>
        <Text style={{color:"black",fontSize:17,fontWeight:"bold",marginBottom:8}}>{name.length>25?name.slice(0,22):name}...</Text>
        <View style={{flexDirection:"row",gap:10,marginVertical:5}}>
        <AntDesign name="staro" size={24} color="green" />
        <Text>{rating}</Text>
        <View style={{backgroundColor:"#003580",padding:6,borderRadius:6}}>
            <Text style={{color:"white"}}>Genius level</Text>
        </View>


        </View>
        </View>

        <View style={{backgroundColor:"#178179",padding:6,borderRadius:6}}>
            <Text style={{color:"white"}}>Travel Sustainable</Text>
        </View>

        </View>
        <View style={{marginHorizontal:15,flexDirection:"row",gap:80,marginTop:10,padding:3}}>
    <View style={{flexDirection:"column",gap:2}}>
        <Text style={{color:"gray",fontSize:16}}>Check In</Text>
        <Text style={{color:"#007fff",fontSize:16,fontWeight:600}}>{selectedDate.startDate}</Text>
    </View>
    <View>
    <Text style={{color:"gray",fontSize:16}}>Check Out</Text>
    <Text style={{color:"#007fff",fontSize:16,fontWeight:600}}>{selectedDate.endDate}</Text>


    </View>

</View>
<View style={{marginHorizontal:15,marginTop:8}}>
<Text style={{fontSize:16,color:"gray"}}>Guests and Rooms</Text>
    <Text style={{color:"gray",fontSize:13}}>{rooms} rooms {adults} adults and {children} children</Text>

</View>
    </Pressable>
    <TouchableOpacity style={{padding:20,marginTop:'auto',paddingHorizontal:20,
    backgroundColor:"#003580",marginHorizontal:20,borderRadius:20}}
    onPress={bookingFunction}
    >
      <Text style={{color:"white",textAlign:"center",fontSize:16,fontWeight:"bold"}}>Book Now</Text>
    </TouchableOpacity>


    </View>
  )
}

export default ConfirmationScreen

const styles = StyleSheet.create({})
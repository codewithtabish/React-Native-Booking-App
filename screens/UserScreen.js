import { StyleSheet, Text, View,TextInput ,Pressable} from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import ToastManager, { Toast } from 'toastify-react-native'

const UserScreen = () => {
    const route=useRoute()
    const [firstName, setFirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const navi=useNavigation()

    const {rooms,children,selectedDate,adults,oldPrice,newPrice,
        rating,photos,name,availableRooms
    } =route?.params

    const finfalFunction=()=>{
        if(!firstName||!lastName||!email||!phone)
        // {
           Toast.warn("please fill all fields")
        // }
        // if(firstName &&lastName && email && phone)
        // {
            navi.navigate('Confirm',{
                    rooms:rooms,
                    children:children,
                  selectedDate:selectedDate,
                    oldPrice:oldPrice,
                    newPrice:newPrice,
                    rating:rating,
                    photos:photos,
                    name:name,
                    adults:adults,
                    availableRooms:availableRooms
                })
        // }

    }
    const checkName=()=>{
        if(firstName.length<3){

        }
    }


  return (
    <View style={{flex:1}}>
       <View style={{padding:20}}>
        <Text style={{color:"gray",marginVertical:3}}>First Name</Text>
        <View style={{borderColor:"gray",borderWidth:1,borderRadius:10,padding:10}}>
            <TextInput
                placeholder='enter your first Name'
                value={firstName}
                onChangeText={(text)=>setFirstName(text)}
                name="firstName"
            />
        </View>
        <Text style={{color:"gray",marginVertical:3}}>last Name</Text>
        <View style={{borderColor:"gray",borderWidth:1,borderRadius:10,padding:10}}>
            <TextInput
                placeholder='enter your last Name'
                value={lastName}
                onChangeText={(text)=>setlastName(text)}
                name="lastName"


            />
        </View>
        <Text style={{color:"gray",marginVertical:3}}>Email</Text>
        <View style={{borderColor:"gray",borderWidth:1,borderRadius:10,padding:10}}>
            <TextInput
                placeholder='enter your Email'
                value={email}
                onChangeText={(text)=>setEmail(text)}
                name="email"


            />
        </View>
        <Text style={{color:"gray",marginVertical:3}}>Phone</Text>
        <View style={{borderColor:"gray",borderWidth:1,borderRadius:10,padding:10}}>
            <TextInput
                placeholder='enter your phone Number'
                value={phone}
                onChangeText={(text)=>setPhone(text)}

                name="phone"


            />
        </View>
        <Text>{firstName} {lastName} {email} {phone}</Text>

    </View>


    <View style={{backgroundColor:"white",padding:15,paddingHorizontal:20,
    flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:"auto",
    marginBottom:5,
    }}>
            <View>
                <View style={{flexDirection:"row",gap:5}}>
                <Text style={{color:"red",textDecorationLine:"line-through",fontWeight:"bold",fontSize:16}}>{oldPrice}</Text>
                <Text>RS {newPrice}</Text>

                </View>
                <Text>You saved {oldPrice-newPrice}</Text>
            </View>
            <View>
                <Pressable style={{backgroundColor:"#003580",padding:10,borderRadius:8}}
                onPress={finfalFunction}
                >
                    <Text style={{color:"white"}}>Final Step</Text>
                </Pressable>
            </View>
        </View>
    </View>
  )
}

export default UserScreen

const styles = StyleSheet.create({})
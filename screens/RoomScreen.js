import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import Aminities from '../components/Aminities';
import { Entypo } from '@expo/vector-icons';

const RoomScreen = () => {
    const route=useRoute()
    const [selected, setSelected] = useState()
    const {rooms,children,selectedDate,adults,oldPrice,newPrice,
        rating,photos,name,availableRooms
    } =route?.params
    const navi=useNavigation()

    return (
    <ScrollView>
    {
        availableRooms?.map((item,index)=>{
            return <View key={index} style={{backgroundColor:"white",margin:10}}>
                <View  style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <Text>{item?.name}</Text>
                    <AntDesign name="infocirlceo" size={24} color="black" />
                </View>
                <Text style={{color:"green",marginVertical:2,fontSize:16,}}>Free Cancelation Available</Text>
                <View style={{flexDirection:"row",gap:8,marginVertical:1}}>
                    <Text style={{color:"red",fontSize:16,fontWeight:600,
                    textDecorationLine:"line-through",
                }}>{oldPrice*adults}</Text>
                    <Text style={{}}>RS {oldPrice*adults}</Text>
                </View>
                <Aminities/>
                {
                    selected===item.name?
                    <Pressable style={{marginVertical:3,borderColor:"#003580",borderWidth:2,
                padding:8,borderRadius:6,marginTop:3,flexDirection:"row",justifyContent:"center"}}>
                    <Text style={{color:"#003580",fontSize:16,fontWeight:'bold',textTransform:"uppercase",
                    textAlign:"center",flex:10}}
                    onPress={()=>setSelected(item.name)}
                    >Selected</Text>
                    <Pressable style={{alignItems:"flex-end",flex:1}}
                    onPress={()=>setSelected("")}
                    >
                    <Entypo name="circle-with-cross" size={24} color="red"
                    />
                    </Pressable>

                </Pressable>:
                <Pressable style={{marginVertical:3,borderColor:"#003580",borderWidth:2,
                padding:8,borderRadius:6,marginTop:3,flexDirection:"row",justifyContent:"center"}}>
                    <Text style={{color:"#003580",fontSize:16,fontWeight:'bold',textTransform:"uppercase",
                    textAlign:"center",flex:10}}
                    onPress={()=>setSelected(item.name)}
                    >Select</Text>
                    <Text style={{alignItems:"flex-end",flex:1}}
                    >

                    </Text>

                </Pressable>
                }

            </View>
        })
    }
    {
        !selected==""?
        <Pressable style={{backgroundColor:"#007fff",marginHorizontal:15,marginBottom:15,padding:10,borderRadius:8}}
        onPress={()=>navi.navigate('User',{
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
        })}>
            <Text style={{color:"white",textAlign:"center",fontSize:17,fontWeight:500}}>Reserve</Text>
        </Pressable>:null
    }

    </ScrollView>
  )
}

export default RoomScreen

const styles = StyleSheet.create({})
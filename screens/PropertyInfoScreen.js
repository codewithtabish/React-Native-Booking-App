import { Dimensions, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import Aminities from '../components/Aminities';

const PropertyInfoScreen = () => {
    const {width,height} =Dimensions.get('window')
    const route=useRoute()
    const navi=useNavigation()
    const {rooms,children,selectedDate,adults,oldPrice,newPrice,
        rating,photos,name,availableRooms
    } =route?.params
    const difference=oldPrice-newPrice
    const offer=(Math.abs(difference)/oldPrice)*100
    useEffect(() => {
        navi.setOptions({
            title:name,
            headerShown:true,
            headerStyle:{
                backgroundColor:"#003580",
                bottomBorderColor:"transparent",
                shadowColor:"transparent"
            },
            headerTitleStyle:{
                color:"white"
            }

        })

    }, [])
  return (
    <SafeAreaView>
        <ScrollView>
        <Pressable style={{flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center"}}>
            {
                photos.slice(0,5).map((item,index)=>{
                    return <Image
                    key={index}
                    style={{width:width/4,height:height/7,margin:2}}
                        source={{uri:item.image}}
                    />
                })
            }
            <Pressable style={{marginLeft:4,color:"gray",
            fontWeight:600}}>
                <Text style={{color:"gray",fontSize:18}}>Show More</Text>
            </Pressable>
        </Pressable>
        <View style={{marginHorizontal:15,marginTop:20
    }}>
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
        <View>

        </View>

        </View>
 {/* BORDER COLOR */}
        <View style={{borderBottomColor:"#e0e0e0",borderBottomWidth:3,marginTop:15,height:1}}>
        </View>
 {/* BORDER COLOR */}
 <View style={{marginHorizontal:15}}>
    <Text style={{color:"gray",fontSize:16,fontWeight:500}}>Price for 1 Night and {adults} adults</Text>
    <View style={{flexDirection:"row",gap:10,alignItems:"center",gap:20}}>
        <Text style={{color:"red",textDecorationLine:"line-through",
        fontSize:16,fontWeight:600}}>{oldPrice*adults}</Text>
        <Text style={{color:"gray",fontSize:16}}>Rs  {newPrice*adults}</Text>
    </View>
    <View style={{
        backgroundColor:"#178179",
        padding:8,
        borderRadius:8,
        width:80,
        marginTop:6
    }}>
        <Text style={{color:"white",textAlign:"center"}}>{offer.toFixed(0)} %</Text>
    </View>
 </View>
 <View style={{borderBottomColor:"#e0e0e0",borderBottomWidth:3,marginTop:15,height:1}}>
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
 {/* BORDER COLOR */}
 <View style={{borderBottomColor:"#e0e0e0",borderBottomWidth:3,marginTop:15,height:1}}>
        </View>
 {/* BORDER COLOR */}
 <Aminities/>
  {/* BORDER COLOR */}
  <View style={{borderBottomColor:"#e0e0e0",borderBottomWidth:3,marginTop:15,height:1}}>
        </View>
 {/* BORDER COLOR */}
 <Pressable style={{backgroundColor:"#6cb4ee",marginHorizontal:16,
 padding:10,marginBottom:6,borderRadius:8}}
 onPress={()=>navi.navigate('RoomScreen',{
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

 })}
 >
    <Text style={{color:"white",textAlign:"center",fontSize:16}}>Select Availability</Text>
 </Pressable>





    </ScrollView>
    </SafeAreaView>

  )
}

export default PropertyInfoScreen

const styles = StyleSheet.create({})
import { Alert, Button, Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import DatePicker from 'react-native-date-ranges';
import { BottomModal, ModalButton, ModalContent, ModalFooter, ModalTitle, SlideAnimation } from 'react-native-modals';

const HomeScreen = () => {
  const route=useRoute()
  const {width,height} =Dimensions.get('window')
  const [selectedDate, setSelectedDate] = useState(null)
  const [rooms, setRooms] = useState(1)
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)
  const [showModal, setShowModal] = useState(false)
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
    const goToPlaceScreenMethod=()=>{
      if(!route.params||!selectedDate){
        Alert.alert('Invalid Detail', 'Please enter all the details', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);


      }
      else{
        navigation.navigate('placeScreen',{
          rooms:rooms,
          adults:adults,
          children:children,
          selectedDate:selectedDate,
          place:route?.params?.passingData
        })
      }
    }
  return (
    <>
    <Header/>
    <ScrollView>
    <Pressable style={{margin:20,borderColor:"#ffc72c",borderWidth:3,borderRadius:8}}

    >

{/* 1 */}
    <Pressable style={{flexDirection:'row',gap:10,paddingVertical:15,paddingHorizontal:10,
    borderColor:"#ffc72c",borderWidth:2,alignItems:"center"}}
    onPress={()=>navigation.navigate('Search')}
    >
    <AntDesign name="search1" size={24} color="black" />
    <TextInput  placeholder={`${ route?.params?.passingData? route?.params?.passingData:"Enter your destination"}`}/>

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
    onPress={()=>setShowModal(!showModal)}
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
    onPress={goToPlaceScreenMethod}
    style={{flexDirection:'row',gap:10,paddingVertical:15,paddingHorizontal:10,
    borderColor:"#ffc72c",borderWidth:2,alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#2a52be"
    }}
    >
    <Text style={{color:"white",fontSize:18}}>Search</Text>

    </Pressable>
    </Pressable>
    <View style={{marginHorizontal:20}}>
    <Text  style={{fontSize:18,fontWeight:600}}>Travel More Spend less </Text>
    <ScrollView
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    >
      <Pressable style={{
        backgroundColor:"#0066b2",
        padding:20,
        flexDirection:"column",
        gap:10,
        borderRadius:20,
        width:width/2,
        marginVertical:10



      }}>
        <Text style={{color:"white",fontSize:16,fontWeight:500}}>Genius</Text>
        <Text style={{color:"white",paddingTop:4,fontSize:12,lineHeight:15,textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur </Text>
      </Pressable>
      <Pressable style={{
        padding:20,
        flexDirection:"column",
        gap:10,
        borderRadius:20,
        width:width/2,
        marginVertical:10,
        marginHorizontal:15,
        backgroundColor:"#ccc"




      }}>
        <Text style={{color:"white",fontSize:16,fontWeight:500}}>15% Discount</Text>
        <Text style={{color:"white",paddingTop:4,fontSize:12,lineHeight:15,textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur </Text>
      </Pressable>
      <Pressable style={{
        backgroundColor:"#ccc",
        padding:20,
        flexDirection:"column",
        gap:10,
        borderRadius:20,
        width:width/2,
        marginVertical:10,
        marginHorizontal:15



      }}>
        <Text style={{color:"white",fontSize:16,fontWeight:500}}>15% Discount</Text>
        <Text style={{color:"white",paddingTop:4,fontSize:12,lineHeight:15,textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur </Text>
      </Pressable>
    </ScrollView>

    </View>


    <Pressable
    style={{marginVertical:20,flexDirection:'row',justifyContent:'center'}}
    >
     <Image
    style={{ width: 200, height: 50, resizeMode: "cover" }}
    source={{
      uri: "https://assets.stickpng.com/thumbs/5a32a821cb9a85480a628f8f.png",
    }}
  />
    </Pressable>
    </ScrollView>

    <BottomModal
     swipeThreshold={200}
     onHardwareBackPress={()=>setShowModal(!showModal)}
     swipeDirection={['up','down']}
     footer={<ModalFooter>
      <ModalButton
      style={{marginBottom:20,color:"white",backgroundColor:"#003580"}}
          text="APPLY"
          onPress={() => {setShowModal(!showModal)}}
        />

     </ModalFooter>}
     modalTitle=<ModalTitle
     style={{color:"white"}}
      title='Select rooms and guests'
     />
     modalAnimation={new SlideAnimation({
      slideFrom: 'bottom',
    })}
    visible={showModal}
    onTouchOutside={()=>setShowModal(!showModal)}


    >
    <ModalContent style={{width:"100%",height:310}}>
    {/* FIRST ROW */}
    <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:"center",
    marginHorizontal:15}}>
      <Text style={{fontSize:18}}>Rooms</Text>
      <View style={{flexDirection:"row",gap:10,alignItems:"center",marginTop:20}}>
        <Pressable
         onPress={()=>setRooms((p)=>Math.max(1,p-1))}
        style={{width:36,height:36,borderRadius:13,backgroundColor:"#003580",
        flexDirection:"row",justifyContent:"center",alignItems:"center"}}
        ><Text style={{color:"white"}}>-</Text>
        </Pressable>
        <Text>{rooms}</Text>
        <Pressable
        onPress={()=>setRooms((p)=>p+1)}
          style={{width:36,height:36,borderRadius:13,backgroundColor:"#003580",
        flexDirection:"row",justifyContent:"center",alignItems:"center"}}
        ><Text style={{color:"white"}}>+</Text>
        </Pressable>
      </View>


    </View>
        {/* END FIRST ROW */}
       {/* SECOND ROW */}

    <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:"center",
    marginHorizontal:15}}>
      <Text style={{fontSize:18}}>Adults</Text>
      <View style={{flexDirection:"row",gap:10,alignItems:"center",marginTop:20}}>
        <Pressable
         onPress={()=>setAdults((p)=>Math.max(1,p-1))}
        style={{width:36,height:36,borderRadius:13,backgroundColor:"#003580",
        flexDirection:"row",justifyContent:"center",alignItems:"center"}}
        ><Text style={{color:"white"}}>-</Text>
        </Pressable>
        <Text>{adults}</Text>
        <Pressable
        onPress={()=>setAdults((p)=>p+1)}
          style={{width:36,height:36,borderRadius:13,backgroundColor:"#003580",
        flexDirection:"row",justifyContent:"center",alignItems:"center"}}
        ><Text style={{color:"white"}}>+</Text>
        </Pressable>
      </View>


    </View>
        {/* end FIRST ROW */}

     <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:"center",
    marginHorizontal:15}}>
      <Text style={{fontSize:18}}>Children</Text>
      <View style={{flexDirection:"row",gap:10,alignItems:"center",marginTop:20}}>
        <Pressable
         onPress={()=>setChildren((p)=>Math.max(0,p-1))}
        style={{width:36,height:36,borderRadius:13,backgroundColor:"#003580",
        flexDirection:"row",justifyContent:"center",alignItems:"center"}}
        ><Text style={{color:"white"}}>-</Text>
        </Pressable>
        <Text>{children}</Text>
        <Pressable
        onPress={()=>setChildren((p)=>p+1)}
          style={{width:36,height:36,borderRadius:13,backgroundColor:"#003580",
        flexDirection:"row",justifyContent:"center",alignItems:"center"}}
        ><Text style={{color:"white"}}>+</Text>
        </Pressable>
      </View>


    </View>


    </ModalContent>

    </BottomModal>

    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
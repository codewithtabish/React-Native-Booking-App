import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { data } from '../data'
import { useNavigation } from '@react-navigation/native'

const ResultScreen = ({searchInput,setSearchInput}) => {
    const navi=useNavigation()
    const {width,height}=Dimensions.get('window')

  return (

    <View style={{margin:20}}>
    <FlatList
      data={data}
      renderItem={({item})=>{
        if(item.place.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()))
        {
            if(searchInput===''){
                return
            }


        return(
            <Pressable style={{flexDirection:'row',alignItems:'center',
            marginVertical:10,gap:10}}
            onPress={()=>{
                navi.navigate('Home',{
                    passingData:item.place
                })

            }}
            >
            <View>
                <Image
                style={{width:70,height:70}}
                    source={{uri:item.placeImage}}
                />
            </View>
            <View>
                <Text style={{fontWeight:500,fontSize:16}}>{item.place}</Text>
                <Text style={{marginVertical:4}}>{item?.shortDescription}</Text>
                <Text style={{fontSize:15,color:'gray'}}>{item?.properties?.length} Properties</Text>
            </View>

            </Pressable>
        )

        }


      }}
    />

    </View>
  )
}

export default ResultScreen

const styles = StyleSheet.create({})
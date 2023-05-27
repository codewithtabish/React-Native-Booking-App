import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import ResultScreen from './ResultScreen';

const SearchScreen = () => {
    const [searchDestination, setSearchDestination] = useState('')
  return (
    <View>
    <View style={{
        margin:20,
        flexDirection:"row",
        alignItems:"center",
        borderColor:"#ffc72c",
        borderWidth:2,
        padding:10,
        borderRadius:10,
        marginTop:30

    }}>
    <TextInput
    style={{flex:1}}
        placeholder='Search your Place '
        value={searchDestination}
        onChangeText={(text)=>setSearchDestination(text)}
    />
    <AntDesign name="search1" size={24} color="black" />
    </View>
     <ResultScreen
        searchInput={searchDestination}
        setSearchInput={setSearchDestination}
    />
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})
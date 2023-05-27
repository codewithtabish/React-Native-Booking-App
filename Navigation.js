import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './screens/HomeScreen'
import SavedScreen from './screens/SavedScreen'
import BookingScreen from './screens/BookingScreen'
import ProfileScreen from './screens/ProfileScreen'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import SearchScreen from './screens/SearchScreen'
import ResultScreen from './screens/ResultScreen'
import PlaceScreen from './screens/PlaceScreen'
import MapScreen from './screens/MapScreen'
import PropertyInfoScreen from './screens/PropertyInfoScreen'
import RoomScreen from './screens/RoomScreen'
import UserScreen from './screens/UserScreen'
import ConfirmationScreen from './screens/ConfirmationScreen'
import RegisterScreen from './screens/RegisterScreen'
import Login from './screens/Login'
const Navigation = () => {
    const Stack=createNativeStackNavigator()
    const Tab= createBottomTabNavigator()

   const MYTabs=()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreen}
                options={{headerShown:false,
                tabBarLabel:"Home",
                tabBarIcon:({focused})=>focused?
                <AntDesign name="home" size={24} color="#003580" />:
                <AntDesign name="home" size={24} color="gray" />
                }}
            />
            <Tab.Screen name='Saved'  component={SavedScreen}
                options={{headerShown:false,
                tabBarLabel:"Saved",
                tabBarIcon:({focused})=>focused?
                <AntDesign name="hearto" size={24} color="#003580" />:
                <AntDesign name="hearto" size={24} color="gray" />

                }}
            />
            <Tab.Screen name='Booking'  component={BookingScreen}
                options={{headerShown:false,
                tabBarLabel:"Bookings",
                tabBarIcon:({focused})=>focused?
                <Ionicons name="ios-notifications-outline" size={24} color="#003580" />:
                <Ionicons name="ios-notifications-outline" size={24} color="gray" />



                }}
            />
            <Tab.Screen name='Profile'  component={ProfileScreen}
                options={{headerShown:true,
                tabBarLabel:"Profile",
                tabBarIcon:({focused})=>focused?
                <AntDesign name="user" size={24} color="#003580" />:
                <AntDesign name="user" size={24} color="gray" />

                }}
            />
        </Tab.Navigator>


    )
   }

  return (
    <NavigationContainer>
    <Stack.Navigator>
    {/* <Stack.Screen
    name="Login"
    component={Login}
    options={{headerShown:false}}
    /> */}

    <Stack.Screen name='Main' component={MYTabs}
        options={{headerShown:false}}
    />
    <Stack.Screen name='Search'  component={SearchScreen}
    options={{headerShown:false}}

    />
    <Stack.Screen name='ResultScreen'
    component={ResultScreen}
    options={{headerShown:false}}

    />
    <Stack.Screen name='placeScreen'
    component={PlaceScreen}
    options={{headerShown:false}}

    />
    <Stack.Screen name='Map'
    component={MapScreen}
    options={{
        headerShown:false
    }}
    />
    <Stack.Screen name='Info'
    component={PropertyInfoScreen}
    options={{headerShown:false}}/>
    <Stack.Screen
    name='RoomScreen'
    component={RoomScreen}
    />
    <Stack.Screen
    name='User'
    component={UserScreen}/>
    <Stack.Screen
    name='Confirm'
    options={{headerShown:false}}
    component={ConfirmationScreen}/>
      {/* <Stack.Screen name='SignUp'
    component={RegisterScreen}
    options={{headerShown:false}}
/> */}

    </Stack.Navigator>

    </NavigationContainer>

  )
}

export default Navigation

const styles = StyleSheet.create({})
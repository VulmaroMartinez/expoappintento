import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator >
        <Stack.Screen 
        name='Home'
        component={HomeScreen}
        options={{title: 'Home'}} 
        />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1 ,
        justifyContent: 'center',
    }
})
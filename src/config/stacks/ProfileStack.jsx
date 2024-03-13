import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from '../screens/ProfileScreen'
import Details from '../components/Details'
const Stack = createStackNavigator();


const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Profile'
        component={ProfileScreen}
      />
      <Stack.Screen 
      name='Details'
      component={Details}
      /> 
    </Stack.Navigator>
  )
}

export default ProfileStack

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SearchScreen from '../screens/SearchScreen'
import Details from '../components/Details'

const Stack = createStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
      name = "Search"
      component = {SearchScreen}
      options = {{title: 'Search'}}
      />
      <Stack.Screen
      name='Details'
      component={Details}
      options={{title: 'Details'}}
      />
    </Stack.Navigator>
  )
}

export default SearchStack

const styles = StyleSheet.create({})
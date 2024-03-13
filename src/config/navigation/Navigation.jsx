import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from '@rneui/base'

import SearchStack from '../stacks/SearchStack'
import ProfileStack from '../stacks/ProfileStack'
import HomeStack from '../stacks/HomeStack'

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    const { iconName, iconType } = getIconName(route.name, focused);
                    return (<Icon name={iconName} type={iconType} size={size} color={color} />);
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            })}
        >
            <Tab.Screen name="HomeStack" component={HomeStack} options={{title: 'Home'}}/>
            <Tab.Screen name="SearchStack" component={SearchStack} options={{title: 'Search'}} />
            <Tab.Screen name="ProfileStack" component={ProfileStack} options={{title: 'Profile'}} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

const getIconName = (routeName, focused) => {
  let iconName;
  let iconType = 'material-community';
  switch (routeName) {
      case 'HomeStack':
          iconName = focused ? 'home' : 'home-outline';
          break;
      case 'SearchStack':
          iconName = focused ? 'magnify' : 'magnify';
          break;
      case 'ProfileStack':
          iconName = focused ? 'account' : 'account-outline';
          break;
      default:
          iconName = 'home';
  }
  return { iconName, iconType };
}


export default Navigation


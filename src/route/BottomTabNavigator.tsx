import React from 'react'
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

//importing screens
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import ChatListScreen from '../screens/ChatListScreen';
import ProfileScreen from '../screens/ProfileScreen';

//Types imported
import { TabParamsList } from './NavigationProps';


const Tab = createBottomTabNavigator<TabParamsList>()

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarLabel: ({ color }) => {
              let label;
      
              if (route.name === 'Home') {
                label = 'Home';
              } else if (route.name === 'Products') {
                label = 'Products';
              } else if (route.name === 'Chat') {
                label = 'Chat';
              } else if (route.name === 'Profile') {
                label = 'Profile';
              }
      
              const fontSize = 15;
              const fontWeight = 'normal';
      
              return <Text style={{ fontSize, fontWeight, color }}>{label}</Text>;
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              display: 'flex',
            },
          })}>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home-outline" color={color} size={size} />
                ),
              }} />
            <Tab.Screen
              name="Products"
              component={ProductsScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="bag-outline" color={color} size={size} />
                ),
              }} />
            <Tab.Screen
              name="Chat"
              component={ChatListScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="chatbubble-ellipses-outline" color={color} size={size} />
                ),
              }} />
            <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="person-outline" color={color} size={size} />
                ),
              }} />
          </Tab.Navigator>
    )
}

export default BottomTabNavigator;
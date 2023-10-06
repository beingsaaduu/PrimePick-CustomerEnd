import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//BottomTabNavigation and Types imported
import BottomTabNavigator from './BottomTabNavigator';
import { StackParamsList } from './NavigationProps';

//Importing Screens
import CartScreen from '../screens/CartScreen';
import ChatScreen from '../screens/ChatScreen';
import CheckOutScreen from '../screens/CheckOutScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import IntroductionScreen from '../screens/IntroductionScreen';
import LoginScreen from '../screens/LoginScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import SearchScreen from '../screens/SearchScreen';
import SignUpScreen from '../screens/SignUpScreen';


const Stack = createNativeStackNavigator<StackParamsList>()

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="CheckOutScreen" component={CheckOutScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        <Stack.Screen name="IntroductionScreen" component={IntroductionScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator;
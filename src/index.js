import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignScreen from './components/authenction/SignScreen'
import SigupScreen from './components/authenction/SigupScreen'
import TabScreen from './components/bottomNavigation/index'

const Stack = createNativeStackNavigator();
export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="sign" component={SignScreen} />
        <Stack.Screen name="sigup" component={SigupScreen} />
        <Stack.Screen name="bottom" component={TabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

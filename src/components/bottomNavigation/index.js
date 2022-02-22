import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient'

import DashboardScreen from './DashboardScreen'
import ActivityScreen from './ActivityScreen'
import ProfileScreen from './ProfileScreen'

const Tab = createBottomTabNavigator();

export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
      screenOptions={{ showLabel: true }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Dashboard') {
              iconName = focused ? 'home': 'home-outline';
            } else if (route.name === 'History') {
              iconName = focused ? 'ios-timer' : 'ios-timer-outline'; //md-aperture-outline
            } else if (route.name === 'Profiles') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Profiles') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Profiles') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={27} color={color} />;
          },
          tabBarActiveTintColor: '#581c87',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen
        component={DashboardScreen} 
        name="Dashboard"
        options={{
          title: 'Dashboard',
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#581c87',
            borderBottomLeftRadius: 23,
            borderBottomRightRadius: 23
          },
          headerTitleStyle: {
            fontWeight: '500',
            fontFamily: 'monospace'
          },
        }}
        />
        <Tab.Screen name="History" component={ActivityScreen} />
        <Tab.Screen name="Profiles" component={ProfileScreen} 
        options={{
          title: 'Profile',
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerBackground: () => (
            <LinearGradient
            start={{x: 0, y: 0}} end={{x: 2, y: 0.0}}
            colors={['#581c87', '#a855f7', '#3730a3']}>
            <Text style={{fontSize: 30}}></Text>
            </LinearGradient>
            ),
          headerTitleStyle: {
            fontWeight: '500',
            fontFamily: 'monospace'
          },
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

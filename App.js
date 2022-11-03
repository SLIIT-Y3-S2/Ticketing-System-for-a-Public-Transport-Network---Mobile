import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import DriverScan from './Components/DriverScan';
import Home from './Components/Home';
import React from 'react';
import AddJourney from './Components/AddJourney';
import DriverDash from './Components/DriverDash';

const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="DriverScan"
            component={DriverScan}
          />
          <Stack.Screen
            name="AddJourney"
            component={AddJourney}
          />
          <Stack.Screen
            name="DriverDash"
            component={DriverDash}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

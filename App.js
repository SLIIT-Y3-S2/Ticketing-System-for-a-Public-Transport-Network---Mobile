import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from './components/Home';
import About from './components/About';
import Payment from './components/Payment';
import InspectorScan from './components/InspectorScan';
import BottomNavBar from './components/BottomNavBar';
import Login from './components/Login';
import Register from './components/Register';

 const Stack = createStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //     <Stack.Navigator>
    //       <Stack.Screen
    //         name="Home"
    //         component={Home}
    //       />
    //       <Stack.Screen
    //         name="About"
    //         component={About}
    //       />
    //       <Stack.Screen
    //         name="Payment"
    //         component={Payment}
    //       />
    //       <Stack.Screen
    //         name="InspectorScan"
    //         component={InspectorScan}
    //       />
    //     </Stack.Navigator>
    //
    // </NavigationContainer>
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen
            name="Easy Going"
            component={BottomNavBar}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <BottomNavBar /> */}
    </>
  );
}



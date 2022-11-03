import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Home from './Home';
import InspectorScan from './InspectorScan';
import About from './About';
import Payment from './Payment';
import Login from './Login';



const home = "Home";
const scan = "Scan QR";
const schedule = "Schedules";
const profile = "Profile";
const login = "Login"

const Tab = createBottomTabNavigator();

const BottomNavBar = () => {
  return (
    <NavigationContainer independent="true">
      <Tab.Navigator
        initialRouteName={home}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === home) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === scan) {
              iconName = focused ? 'scan-circle' : 'scan-circle-outline';

            } else if (rn === schedule) {
              iconName = focused ? 'bus' : 'bus-outline';

            } else if (rn === profile) {
                iconName = focused ? 'person-circle' : 'person-circle-outline';
            }

            
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        BottomTabNavigationOptions={{
          activeTintColor: '#1e90ff',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={home} component={Home} />
        <Tab.Screen name={scan} component={InspectorScan} />
        <Tab.Screen name={schedule} component={About} />
        <Tab.Screen name={profile} component={Payment} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomNavBar;
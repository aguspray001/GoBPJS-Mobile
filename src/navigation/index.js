import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {colors} from '../constant/colors';
import {
  ClaimForm,
  DetailHistory,
  History,
  Home,
  Login,
  Profile,
  Register,
  Splash,
} from '../screens';
import BottomNavigator from './BottomMenu';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomNavigator {...props} />}
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ClaimForm"
        component={ClaimForm}
        options={{
          tabBarLabel: 'Help',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const RootStack = () => {
  const [signed, setSigned] = useState(false);
  useEffect(async () => {
    const token = await secureGetData('token');
    // console.log("token route:", token)
    if (token) {
      setSigned(true);
    }
  }, []);
  return (
    <Stack.Navigator
      initialRouteName={signed === true ? 'Home' : 'Login'}
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      {/* <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ClaimForm"
        component={ClaimForm}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailHistory"
        component={DetailHistory}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

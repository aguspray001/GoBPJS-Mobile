import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {colors} from '../constant/colors';
import {
  DetailHistory,
  Help,
  History,
  Home,
  Login,
  Profile,
  Register,
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
        name="Help"
        component={Help}
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
      {/* <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      /> */}
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

export const RootStack = ({isLogin}) => {
  console.log('rootstack:', isLogin);
  return (
    <Stack.Navigator
      initialRouteName={isLogin === true ? 'Home' : 'Login'}
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
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

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './screens/Login';
import Signin from './screens/Signin';
import Welcome from './screens/Welcome';
import Popup from './screens/Popup';
import Home from './screens/Home';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';
import TurfDetails from './components/turfDetails';
import Date_and_time from './components/Date_and_time';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen name="Welcome" options={{ headerShown: false }} component={Welcome} />
      <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
      <Stack.Screen name="Popup" options={{ headerShown: false }} component={Popup} />
      <Stack.Screen name="Signin" options={{ headerShown: false }} component={Signin} />
      <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
      <Stack.Screen name="Settings" options={{ headerShown: false }} component={SettingsScreen} />
      <Stack.Screen name="Profile" options={{ headerShown: false }} component={ProfileScreen} />
      <Stack.Screen name="TurfDetails" options={{ headerShown: false }} component={TurfDetails} />
      <Stack.Screen name="Date_and_time" options={{ headerShown: false }} component={Date_and_time} />

    </Stack.Navigator>
  </NavigationContainer>
  )
}
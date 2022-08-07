import React from 'react';
import { View } from 'react-native';
import HomeScreen from './app/screens/HomeScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddMoneyScreen from './app/screens/AddMoneyScreen';
import RequestScreen from './app/screens/RequestScreen';
import SendScreen from './app/screens/SendScreen';
import SplashScreen from './app/screens/SplashScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='SplashScreen' component={SplashScreen} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='AddMoneyScreen' component={AddMoneyScreen} />
        <Stack.Screen name='RequestScreen' component={RequestScreen} />
        <Stack.Screen name='SendScreen' component={SendScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;

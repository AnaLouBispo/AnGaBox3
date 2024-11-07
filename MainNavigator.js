import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from './src/Pages/Home';
 
const Stack = createNativeStackNavigator();
 
export default function MainNavigator() {
  return (
    <NavigationContainer initialRoutename="Home">
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
   
  )
}
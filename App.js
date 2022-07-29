import React,{ Component,useState } from 'react';
import { Text, View,StyleSheet,Button } from "react-native";

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Coffee from './Components/Coffee/Coffee';
import Home from './Components/Home/Home';



const Stack = createStackNavigator();
export default function App() {


  return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Coffee Shop"
            component={Home}
            options={{title:'Home Screen'}}
          />
          <Stack.Screen
            name="Coffee"
            component={Coffee}
            options={{title:'Caffee Screen'}}

          />
 


        </Stack.Navigator>
      </NavigationContainer>

  )
}





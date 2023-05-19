import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from './components/Home.js'
import Log from "./components/Log.js";
import Stats from "./components/Stats.js";
import NewLog from "./components/NewLog.js";

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Log" component={Log}/>
        <Stack.Screen name="Stats" component={Stats}/>
        <Stack.Screen name="NewLog" component={NewLog} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: 'center',
    paddingHorizontal: 100
  },
  padding: {
  },
  box1: {
    backgroundColor: 'cyan'
  },
  box2: {
    backgroundColor: 'blue'
  },
  box3: {
    backgroundColor: 'magenta'
  },
  box4: {
    backgroundColor: 'orange'
  },
});

export default App
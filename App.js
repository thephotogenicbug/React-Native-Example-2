import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Profile from './Components/Profile';
import About from './Components/About';
const App = () =>{

  return(
    <View style={{flex:1, margin:100}}>
      <Text style={{fontSize:25}}>Components</Text>
      <Profile/>
      <About/>
      <StatusBar style="auto" />
    </View>
  )
}

export default App;


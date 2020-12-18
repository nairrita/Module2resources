import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  Red from './components/Red.js';
import  Blue from './components/Blue.js';
import  Green from './components/Green.js';

export default class App extends React.Component{
  render(){
    return(
      <View style = {styles.container}>

   <Red/>
<Green/>

   <Blue/>
   </View>

    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'


  }
})

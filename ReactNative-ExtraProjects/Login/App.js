import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Login from './components/Login'
import MyForm from './components/MyForm'
export default class App extends React.Component{
  render(){
    return(
      <View style =  {styles.container}>
        <Login/>
        <MyForm/>
      </View>
    )
  }
}

const styles  = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor : '#19b5fe',
    alignItems  : 'center',
    justifyContent: 'center'
  }
})
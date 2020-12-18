import React from  'react';
import {View,Text,StyleSheet} from 'react-native';
import Header from './components/Header';
import ShoppingIcon from './components/ShoppingIcon'

export default class App extends React.Component{

  render(){
    return(
      <View style = {StyleSheet.container}>
<Header/>
<ShoppingIcon/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container :{
    flex : 1,
    backgroundColor:'#fff',
    alignItems : 'center',
    justifyContent : 'center'
  }
})

import React, {Component} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';

export default class Blue extends React.Component{
  render(){
    return(
      <View style = {styles.container}>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    width:100,
    height : 100,
    backgroundColor: 'blue'
  }
})





import * as React from 'react';

import {View, Text,StyleSheet,TouchableOpacity,Linking} from 'react-native';



export default class App extends React.Component{

  render(){

​    return(

​      <View style ={styles.container}>

​        <TouchableOpacity 

​        style ={{backgroundColor:"red"}}

​        

​        onPress = {()=>{

​          Linking.openURL('https://google.com')

​        }}>

​          <Text>Click</Text>

​        </TouchableOpacity>



​      </View>

​    )

  }

}



const styles = StyleSheet.create({

  container: {

​    flex: 1,

​    alignItems: 'center',

​    justifyContent: 'center',

​    paddingTop: 20,

​    backgroundColor: '#ecf0f1',

  },

});
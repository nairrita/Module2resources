import React from 'react';
import {View, StyleSheet, Text,TextInput,TouchableOpacity} from 'react-native';


export default class MyForm extends React.Component{
render(){
    return(
        <View style ={styles.container}>
         <TextInput
         placeholder = "UserName"
         style = {styles.inputBox}
         
         />

         <TextInput

         placeholder =  "password"
         secureTextEntry = {true}
         style = {styles.inputBox}
         />

         <TouchableOpacity style = {styles.buttoncontainer}>
             <Text style = { styles.buttonText}>Login</Text>
         </TouchableOpacity>

        </View>


    )
}
}

const styles = StyleSheet.create({
    container : {
flex : 1,
padding : 5,

    },

inputBox:{
marginTop : 100,
width : 200,
height : 40,
backgroundColor: '#fff',
padding : 20,
marginBottom :10
    },

    buttoncontainer:{
    backgroundColor : '#29f1c3',
    paddingVertical : 15
    },
    buttonText:{
    textAlign: 'center',
    color : '#fff',
    fontWeight : 'bold'

    }
})


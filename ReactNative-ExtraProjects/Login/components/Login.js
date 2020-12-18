import React from 'react';
import {View, Text, StyleSheet,Image,TextInput,KeyboardAvoidingView} from 'react-native';
import MyForm from './MyForm'
export default class Login extends React.Component{
    render(){
        return(
            

                <KeyboardAvoidingView  behavior = "padding" style = {styles.logoContainer}>
            <Image
            source = {require('../assets/logo.png')}
            style = {styles.logo}
            />
            <View style = {styles.myForm}>
             <MyForm/>
                </View>
           </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container : {

        flex : 1,
        

    },
    logoContainer : {
        
        flexGrow : 1,
        alignItems : 'center',
        justifyContent: 'center'
    },
    logo : {
        
        width: 100,
        height : 100
    },
    myForm:{
        flex:2
    }
})
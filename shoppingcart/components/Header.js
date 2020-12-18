import React, { Component } from 'react';
import {StyleSheet, View,Text,Image} from 'react-native';

export default class Header extends React.Component{
    render(){
        return(
            <View  style = {styles.header}>
            <Image
            source = {require('../assets/cart.png')}
            style = {styles.logo}
            />

            <Text style = {styles.text}>Shopping Cart</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        height : 80,
        marginTop : 50,
        marginLeft : 80,
        backgroundColor : '#fff',
        flexDirection: 'row',
        alignItems : 'center',
        justifyContent : 'center',
        padding : 20,
        borderBottomWidth : 4,
        borderBottomColor : '#000'



       
       
    },

    logo:{
    width : 100,
    height : 100,
    margin: 20
    

    },
    text:{
        color : '#000',
        fontSize : 20,
        fontWeight : 'bold',
        color : '#2c3e50',
        fontStyle : 'italic'
    }
})
import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';


export default class ShoppingIcon extends React.Component{
    render(){
        return(
            <Image
            style = {styles.imageIcon}
            source = {require('../assets/onlineshop.png')}

            
            />
        )
    }
}

const styles = StyleSheet.create({
    imageIcon : {
       
       width : 200,
       height : 300,
       marginTop : 200,
       marginLeft : 100
    }
})
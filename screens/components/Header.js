import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

function Header(props) {
    return (      
            <View style={styles.header}>
               <Text style={styles.textHeader}>{props.screen}</Text>
               
               
           </View>        
    );
}

export default Header;
const styles = StyleSheet.create({
    header:{
        height:60,
        backgroundColor: "blue",
        padding:5,
        justifyContent: "center"
    },
    textHeader:{
        color: "white",
        textAlign: "left",
        fontSize:25
    },
})
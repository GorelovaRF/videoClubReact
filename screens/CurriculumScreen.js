import React from 'react';
import { SafeAreaView, ScrollView,StyleSheet,Text,View} from 'react-native';
import {Icon, ListItem, Divider} from 'react-native-elements';

import Header from './components/Header';


const list = [
    {
      title: '2014-2018: ',
      subtitle: 'Bachelor of Biotechnical Systems and Technologies'
    },
    {
      title: '2018-2019: ',
      subtitle: 'Master in Biomedicine'
    },
    {
        title: '2020: ',
        subtitle: 'Master in Development and Web Services'
      }
    
  ]

function CurriculumScreen(props) {
    return (
        <SafeAreaView>
            <View style={styles.header}>
               <Text style={styles.textHeader}>
               <Icon
                            reverse
                            name='arrow-back-circle-outline'
                            type='ionicon'
                            color='blue' 
                            onPress={() => props.navigation.goBack()}
                />  
                Curriculum</Text> 
           </View>  
            {
            list.map((l, i) => (
            <ListItem key={i} bottomDivider>
                <ListItem.Content>
                <ListItem.Title>{l.title}</ListItem.Title>
                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                </ListItem.Content>
                
            </ListItem>
                ))
            }
            

        </SafeAreaView>
    );
}

export default CurriculumScreen;

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
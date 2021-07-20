import React from 'react';
import { SafeAreaView,View, Text, Linking, StyleSheet} from 'react-native';
import {Card, Icon, ListItem, Divider} from 'react-native-elements';

import Header from './components/Header';




function AutorScreen(props) {
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
                Autor</Text> 
           </View>                
            
            <View>
                <Card>
                    <Text style={{ fontSize: 24, marginBottom: 10 }}>Información</Text>
                    <Text style={{ color: '#696969' }}>
                            Aplicacíon desarollada por Anastasiia Gorelova.{"\n"}A continuación puede consultar más información sobre el autor.
                    </Text>
                    <View>
                    <ListItem onPress={() => props.navigation.navigate('Curriculum')} >
                        <ListItem.Content>
                            <ListItem.Title>
                            <Icon
                            reverse
                            name='book-outline'
                            type='ionicon'
                            color='blue'                        
                            />  
                                Curriculum vitae</ListItem.Title>                        
                        </ListItem.Content>
                    </ListItem>
                    <Divider style={{ backgroundColor: 'gray' }} />
                    <ListItem onPress={() => Linking.openURL('mailto:anastacia.gorelova@mail.ru')} >
                        <ListItem.Content>
                            <ListItem.Title>
                            <Icon
                            reverse
                            name='mail-outline'
                            type='ionicon'
                            color='blue'                        
                            />  
                        <Text style={{ fontWeight: 'bold' }}>Correo :</Text>                           
                           anastacia.gorelova@mail.ru</ListItem.Title>                        
                        </ListItem.Content>
                    </ListItem>
                    <Divider style={{ backgroundColor: 'gray' }} />
                    <ListItem onPress={() => Linking.openURL('https://www.instagram.com/gorelovaRF/')}>
                        <ListItem.Content>
                            <ListItem.Title>
                            <Icon
                            reverse
                            name='logo-instagram'
                            type='ionicon'
                            color='blue'                        
                            />  
                        <Text style={{ fontWeight: 'bold' }}>Instagram: </Text>                           
                           @gorelovaRF</ListItem.Title>                        
                        </ListItem.Content>
                    </ListItem>
                    <Divider style={{ backgroundColor: 'gray' }} />
                    <ListItem onPress={() => Linking.openURL('tel:672528087')}> 
                        <ListItem.Content>
                            <ListItem.Title>
                            <Icon
                            reverse
                            name='call-outline'
                            type='ionicon'
                            color='blue'                        
                            />  
                        <Text style={{ fontWeight: 'bold' }}>Instagram: </Text>                           
                           672528087</ListItem.Title>                        
                        </ListItem.Content>
                    </ListItem>

                    
                    </View>
                    
                </Card>
            </View>

        </SafeAreaView>
    );
}

export default AutorScreen;

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
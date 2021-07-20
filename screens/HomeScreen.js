import React from 'react';
import { SafeAreaView, StyleSheet, Text, View,Image } from 'react-native';
import {Card, Button, Icon} from 'react-native-elements';

import Header from './components/Header';



function HomeScreen(props) {
    return (
       <SafeAreaView>
           <Header screen = "Inicio"></Header>
           <View>
               <Card style={styles.card}>
               <Text style={{color: '#696969'}}>Bienvenido a</Text>
                <Text style={{ fontSize: 24, marginBottom: 10 }}>¡Videoclub!</Text>
                <Text style={{color: '#696969'}}>
                    ¡Videoclub es una aplicacíon desarollada con React Native.
                </Text>
                <Text style={{ marginBottom: 10, color: '#696969' }}>Para acceder a la gestión del videoclub pulsa el siguiente botón:</Text>
                <Button style={{alignItems: 'flex-start'}}
                    icon={
                        <Icon
                            name='ios-videocam'
                            type='ionicon'
                            size={25}
                            color="#696969"
                            marginRight={20}

                        />
                    }
                    title=" Acceso a ¡Videoclub!"
                    titleStyle={{fontSize: 18, color: '#000',}}
                    type="clear"
                    onPress={() => props.navigation.navigate('Videoclub')}
                    
                />
                    
               </Card>
           </View>
           <View style={styles}>
            <Card>
           <Text style={{ fontSize: 20, marginBottom: 10 }}>Información sobre el autor</Text>
                <Text style={{ marginBottom: 10, color: '#696969' }}>Aplicacíon desarollada por{"\n"}Anastasiia Gorelova</Text>
                <Button style={{alignItems: 'flex-start'}}
                    title=" Consultar información"
                    titleStyle={{fontSize: 18, color: '#000'}}
                    type="clear"
                    icon={
                        <Icon 
                            name='ios-person'
                            type='ionicon'
                            size={25}
                            color="#696969"
                            marginRight={20}
                        />
                    }
                    onPress={() => props.navigation.navigate('Autor')}
                />
                </Card>

           </View>
           
          

       </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
   
    card:{
        padding:15

    }
})
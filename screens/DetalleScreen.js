import React from 'react';
import { Image, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {Divider, ListItem, Avatar,Icon,Button,Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { MOVIES } from '../shared/movies';
import {CONFIG} from "../shared/config";

export default class DetalleScreen extends React.Component {
   constructor(props) {
      super(props);
    
      this.state = {
        products: [],
        isLoading: false,
        error: false
      };
   }
   componentDidMount() {
      this.loadData();
    }

    async loadData() {
      try {
          this.setState({ isLoading: true });
          let response = await fetch(CONFIG.baseUrl)
          let data = await response.json();
          console.log(data);
          this.setState({ products: data, isLoading: false });
      } catch (error) {
          console.log(error);
          this.setState({ error: error, isLoading: false });
      }
  }
  

  render() {
   const { products, error, isLoading } = this.state;
 
   if (error)
     return <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} ><Text>{error.message}</Text></View>;

   if (isLoading)
     return <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} ><Text>Loading...</Text></View>;

   return (
    <SafeAreaView>
     <ScrollView>
        <View style={styles.header}>
               <Text style={styles.textHeader}>
               <Icon
                            reverse
                            name='arrow-back-circle-outline'
                            type='ionicon'
                            color='blue' 
                            onPress={() => this.props.navigation.goBack()}
                />  
                {this.props.route.params.titleMov}</Text> 
           </View>                    
            <View>
            <Card>
            <Card.Title>
            <Avatar size='xlarge' source={{ uri: this.props.route.params.postMov} }></Avatar>
            </Card.Title>
            <Text><Text style={{fontWeight:'bold'}}>Director:</Text> <Text style={{color:'gray'}}>{this.props.route.params.dirMov}</Text></Text>
            <Text><Text style={{fontWeight:'bold'}}>Año:</Text> <Text style={{color:'gray'}}>{this.props.route.params.yaerMov}</Text></Text>
            <Text><Text style={{fontWeight:'bold'}}>Sinopsis:</Text> <Text style={{color:'gray'}}>{this.props.route.params.sinMov}</Text></Text>
            
            </Card>  
            
            </View>

     </ScrollView>
     </SafeAreaView>

   );
 }
}
const styles = StyleSheet.create({
   list: {
      padding: 15
   },
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
  card:{
    justifyContent: "center",
    alignItems: "center"
  }
    
})




/*import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import { Icon, Card,Image} from 'react-native-elements';
import { MOVIES } from '../shared/movies';




function DetalleScreen(route, props) {
   
    
    return (
        <View>
            <View style={styles.header}>
            <Text style={styles.textHeader}>
            <Icon
                        reverse
                        name='arrow-back-circle-outline'
                        type='ionicon'
                        color='blue' 
                        onPress={() => props.navigation.goBack()}
            />  
            Detalle</Text> 
            </View> 
            <View>
            <Card>
            <Image
            source={require('../assets/posters/el_padrino.jpg')}
            resizeMode={'cover'}
            style={{ width: '100%', height: 200 }}
            />
            <Card.Title>Pelicula nombre</Card.Title>
            <Text><Text style={{fontWeight:'bold'}}>Director:</Text> <Text style={{color:'gray'}}>Nombre</Text></Text>
            <Text><Text style={{fontWeight:'bold'}}>Ano:</Text> <Text style={{color:'gray'}}>1994</Text></Text>
            <Text><Text style={{fontWeight:'bold'}}>Sinopsis:</Text> <Text style={{color:'gray'}}>Sin</Text></Text>
            
            </Card>  
            
            </View>
        </View>
        
        
    
    
    );
}

export default DetalleScreen;

const styles = StyleSheet.create({
    list: {
       padding: 15
    },
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
     
 })*/
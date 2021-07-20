
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Divider, ListItem, Avatar,Icon,Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { MOVIES } from '../shared/movies';
import {CONFIG} from "../shared/config";

export default class VideoclubScreen extends React.Component {
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
          let response = await fetch(CONFIG.baseUrl);
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
                VideoClub</Text> 
           </View> 
           <View> 
           
       {
         products.map((product) => (
           <ListItem
             bottomDivider
             key={product.id}
             onPress={() => console.log('Element ' + product.id + ' selected')}
             onPress={() => this.props.navigation.navigate('Detalle',
             {
                idMov: product.id,
                titleMov: product.title,
                postMov: product.poster,
                yaerMov: product.year,
                sinMov: product.synopsis,
                dirMov: product.director,
               })}
           >
              <Avatar size='large' source={{ uri: product.poster} }/>
              <ListItem.Content>
                <ListItem.Title>{product.title}</ListItem.Title> 
                
                
                <Text >{'Director: ' + product.director } </Text>
                <Text>{'Año: ' + product.year } </Text>
                </ListItem.Content>
             
             
             <ListItem.Chevron />
           </ListItem>
         ))
       }
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
    
})


//Con la lista de peliculas de shared/movies.js
/*
function VideoclubScreen(props) {
   return (
      <ScrollView>
          <View style={styles.header}>
               <Text style={styles.textHeader}>
               <Icon
                            reverse
                            name='arrow-back-circle-outline'
                            type='ionicon'
                            color='blue' 
                            onPress={() => props.navigation.goBack()}
                />  
                VideoClub</Text> 
           </View>  
          
          <View style={styles.list}>
         {
            MOVIES.map((movie)=> (
               <ListItem
               
               bottomDivider
               key={movie.id}
               onPress={() => props.navigation.navigate('Detalle', movie )}
               >
                <Avatar size='large' source={{ uri: movie.poster} }/>
                <ListItem.Content>
                <ListItem.Title>{movie.title}</ListItem.Title> 
                
                <Text >{'Director: ' + movie.director } </Text>
                <Text>{'Año: ' + movie.year } </Text>
                </ListItem.Content>
                <ListItem.Chevron  />

               </ListItem>
            ))

         }
         </View>

      </ScrollView>
   );
}

export default VideoclubScreen;



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
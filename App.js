import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import AutorScreen from './screens/AutorScreen';
import CurriculumScreen from './screens/CurriculumScreen';
import HomeScreen from './screens/HomeScreen';
import VideoclubScreen from './screens/VideoclubScreen';
import DetalleScreen from './screens/DetalleScreen';





const HomeStack = createStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Inicio' , headerShown: false }}
      />
      <HomeStack.Screen
        name="Videoclub"
        component={VideoclubScreen}
        options={{ title: 'Videoclub', headerShown: false }}
      />
      <HomeStack.Screen
        name="Curriculum"
        component={CurriculumScreen}
        options={{ title: 'Curriculum', headerShown: false }}
      />
      <HomeStack.Screen
        name="Autor"
        component={AutorScreen}
        options={{ title: 'Autor', headerShown: false }}
      />
       <HomeStack.Screen
        name="Detalle"
        component={DetalleScreen}
        options={{ title: 'Detalle', headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen 
        name="Home" 
        component={HomeStackNavigator} 
        options={{title: 'Inicio'}}
        />
        <Drawer.Screen 
        name="Autor" 
        component={AutorScreen} 
        options={{title: 'Sobre Anastasiia'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
    
  )
}


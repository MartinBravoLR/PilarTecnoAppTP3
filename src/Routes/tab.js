import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import{Dimensions} from"react-native"

import {
  StyleSheet,
} from 'react-native';


//Screens
import Home from "../Screens/Home";
import Perfil from "../Screens/Perfil";
import Mapa from "../Screens/Mapa";
import Listas from "../Screens/Listas";

// Import vector icons
import { Icon} from '@rneui/base';


const Tab=createBottomTabNavigator();

export const AppTab = () => {
 
  return (
    
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{  
      headerShown:false,
      tabBarShowLabel:false,
    
        tabBarStyle:{
        backgroundColor:"#9098F8",
        height:55,
        position:"absolute",
        bottom:16,
        right:16,
        left:16,
        borderRadius:15
      }
       }}>
            
            <Tab.Screen name ="Home" component ={Home} options={{
     
              tabBarIcon: ({ color, size,focused }) => (
                <Icon name="home" color={focused ? "#F7EDF6":"grey"} type="font-awesome" size={focused ? 40:25}
                />  )  }}/>

            <Tab.Screen name ="Perfil" component ={Perfil} options={{
              tabBarLabel:"User",
              tabBarIcon: ({ color, size ,focused}) => (
                <Icon name="user" color={focused ? "#F7EDF6":"grey"} type="font-awesome" size={focused ? 40:25}
                /> )  }}/>

          <Tab.Screen name ="Listas" component ={Listas}options={{
              tabBarLabel:"List",
              tabBarIcon: ({ color, size ,focused}) => (
                <Icon name="list" color={focused ? "#F7EDF6":"grey"} type="font-awesome" size={focused ? 40:25}
                /> )  }}/>
          
            <Tab.Screen name ="Mapa" component ={Mapa}
            options={{
              tabBarLabel:"Mapa",
              tabBarIcon: ({ color, size ,focused}) => (
                <Icon name="map" color={focused ? "#F7EDF6":"grey"} type="font-awesome" size={focused ? 40:25}
                /> )  }}/>

        </Tab.Navigator>
  );
}
const styles= StyleSheet.create({
  
  button:{
    elevation:3,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:50,

  },
  text:{
    justifyContent:"center",
    color:"black",
    fontSize:40
  }
})


        
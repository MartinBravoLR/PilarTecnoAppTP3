import React from 'react';

import { StyleSheet, Text, View ,TouchableOpacity,Image,Dimensions} from 'react-native'


import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from '../Components/Header';
import { useNavigation } from '@react-navigation/native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const App=(props) => {
  const navigation = useNavigation();
  const navigateTO = (route)=>{
    navigation.navigate(route)
  };
  return (
    <SafeAreaProvider>
      <Header/>
      <View
            backgroundColor="#FEF98B"
            >

           <View style={{flexDirection:"row"}}>
                <View style={{...styles.view1,justifyContent:"flex-end",}}>
                   <TouchableOpacity style={{...styles.button,backgroundColor:"#581845"}}onPress={() => {navigateTO("Perfil")}}>
                    <Text style={{justifyContent:"center",color:"white",fontSize:30}}>Perfil</Text>
                  </TouchableOpacity>
                </View>
          
          
          <View style={{...styles.view1,justifyContent:"flex-end",}}>
                
                <TouchableOpacity style={{...styles.button,    backgroundColor:"#FF5733"}}onPress={() => {navigateTO("Listas") }}>
                    <Text style={{justifyContent:"center",color:"white",fontSize:30}}>Listas</Text>
                    
                </TouchableOpacity>

          </View>
      </View>

      <View style={{flexDirection:"row"}}>
      
          <View style={{...styles.view1,justifyContent:"flex-start",}}>
            <TouchableOpacity style={{...styles.button,backgroundColor:"#C70039"}}onPress={() => {navigateTO("Mapa")}}>
                <Text style={{justifyContent:"center",color:"white",fontSize:30}}>Mapa</Text>
            </TouchableOpacity>
          </View>
          
          <View style={{...styles.view1,justifyContent:"flex-start", }}>
              <TouchableOpacity style={{...styles.button,backgroundColor:"#FFC300"}} onPress={() =>{navigateTO("Tareas")}}>
                <Text style={{justifyContent:"center",color:"white",fontSize:30}}>Tareas</Text>
              </TouchableOpacity>
         </View>
         
      </View>
      </View>
    </SafeAreaProvider>
  );}

const styles= StyleSheet.create({
  view1:{
    flex:1,
    padding:30,
    alignItems:"center",
    width:windowWidth/4,
    height:windowHeight/2
  },
  button:{
    elevation:3,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:50,
    width:windowWidth/4,
    height:windowHeight/4
  
  },
  })
export default App;

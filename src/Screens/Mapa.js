import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React, { useEffect, useState } from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context';
import  Header from "../Components/Header";
const Mapa = () => {


  return (
    <SafeAreaProvider>
    <Header tittle="Mapa"/>
  
    <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#DB2D3E"}}>
            <TouchableOpacity style={{...styles.button,}}disabled>

                <Text style={{...styles.text}}>Mapa</Text>
                  <View>
                    <Image
                      source={require("../assets/mapa.png")}
                      resizeMode="contain"
                      style={{
                        height:35,
                        witdh:25,
                        tintColor:"white"
                      }}/>
                  </View>
           </TouchableOpacity>
          </View>
    </SafeAreaProvider>

  )
}

export default Mapa



const styles= StyleSheet.create({
  
  button:{
    justifyContent:"center",
    alignItems:"center",
    borderRadius:50,
  
  },
  text:{
    justifyContent:"center",
    color:"white",
    fontSize:40
  }
})
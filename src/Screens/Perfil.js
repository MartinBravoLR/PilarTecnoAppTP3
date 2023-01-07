import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context';
import  Header from "../Components/Header";

import { Icon } from 'react-native-elements'
import { Avatar,Button } from '@rneui/themed';

import {useSelector} from  'react-redux';
import {appSelector} from  '../redux/appRedux';

import {useDispatch} from  'react-redux';
import {appActions} from  '../redux/appRedux';


const Perfil = () => {
  const dispatch=useDispatch()
  const setAut=()=>{
    dispatch(appActions.setUser(null))
  }
  const User=useSelector(appSelector.user)
  return (
  <SafeAreaProvider>
    <Header tittle="Perfil"/>
     <TouchableOpacity style={{...styles.button,}}disabled>
       <View style={{flexDirection:'row',right:70}}>
  
          <Avatar
          activeOpacity={0.2}
          avatarStyle={{}}
          containerStyle={{ backgroundColor: "#BDBDBD",left:30 }}
          rounded
          size="large"
          source={{
            uri:User.url
          }}
          />
          <Text style={{...styles.Text}}>{User.name} {User.lastname}</Text>  
         
        </View>
        <View style={{flexDirection:"row",left:45,}}>
        <Icon
          name="briefcase"
          type='font-awesome'
          color="#1B1B25"
          containerStyle={{right:20}}/>
          <Text style={{...styles.TextJob}}>{User.job} </Text>  
         </View>

     </TouchableOpacity>
          
           <Button
              title="Cerrar Sesión"
              onPress={()=>setAut()}
              icon={{
                name: 'sign-out',
                type: 'font-awesome',
                size: 35,
                color: 'white',
              }}
              iconRight
              iconContainerStyle={{ marginLeft: 10 }}
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={{
                backgroundColor: 'rgba(199, 43, 98, 1)',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 30,
              }}
              containerStyle={{
                width: 300,
                marginHorizontal: 50,
                marginVertical: 10,
                marginTop:30
              }}
            />

    </SafeAreaProvider>

  )
}

export default Perfil


const styles= StyleSheet.create({
  Text:{
    left:70,
    fontWeight:"bold",
    fontSize:25,
    marginTop:20
  },
  button:{
    justifyContent:"center",
    alignItems:"center",
    borderRadius:50,
    witdh:100,
    height:200,
    backgroundColor:"#9098F8",
    borderRadius:20,
    marginLeft:20,
    marginRight:20,
    marginTop:40
  },
  TextJob:{
    color:"#1B1B25",
    fontSize:18,
    fontWeight:"700"
  }
})

   
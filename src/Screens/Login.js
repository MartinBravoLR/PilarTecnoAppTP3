import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button } from '@rneui/themed';


import { TextInput } from 'react-native-gesture-handler';

import {useDispatch} from  'react-redux';
import {appActions} from  '../redux/appRedux';


const Login = () => {
  const dispatch=useDispatch()
  const setAut=()=>{
    dispatch(appActions.setUser({name:"Martin",lastname:"Bravo",job:"Programmer",url:"https://lh3.googleusercontent.com/ogw/AOh-ky2DHme8DkwPyZFVABu_wHQfElID_ejsCL3G9QS6=s32-c-mo"}))
  }
  return (
    <View style={styles.View1}>
      <Text style={styles.text}>Login</Text>
      <Text style={styles.subtext}>Ingrese a su Cuenta</Text>
      <TextInput style={styles.input}placeholder='User'/>
      <TextInput style={styles.input}placeholder='Password'/>
      <Button
              title="Sign in"
              loading={false}
              loadingProps={{ size: 'small', color: 'white' }}
              buttonStyle={{
                backgroundColor: 'rgba(111, 202, 186, 1)',
                borderRadius: 5,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
              containerStyle={{
                marginTop:50,
                marginHorizontal: 50,
                height: 50,
                width: 200,
                marginVertical: 10,
              }}
              onPress={()=>setAut()}
            />
    </View>
  )
}

export default Login

const styles= StyleSheet.create({
  
  View1:{
    flex:1,
    backgroundColor:"#F7EDF6",
    justifyContent:"center",
    alignItems:"center",
  
  },
  text:{ 
    fontSize:80,
    color:"#394241",
    fontWeight:"bold"
  },
  subtext:{
    fontSize:20,
    color:"#697A79"
  },
  input:{
    borderWidth:1,
    borderColor:"gray",
    padding:10,
    width:"70%",
    height:50,
    marginTop:20,
    borderRadius:30,
    backgroundColor:"white"
    
  }
})

    
 
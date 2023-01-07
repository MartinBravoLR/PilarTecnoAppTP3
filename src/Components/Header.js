import React from 'react';

import {
  Image,
  StyleSheet,
  View, 
  TouchableOpacity
} from 'react-native';

import { Header} from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/base';

import {useDispatch} from  'react-redux';
import {appActions} from  '../redux/appRedux';


const HeaderApp=(props) => {

  const dispatch=useDispatch()
  const setAut=()=>{
    dispatch(appActions.setUser(null))
  }

    const {tittle = "PilarTecno",rightComponent,leftComponent}= props;
    const {back = true}= props;

    const navigation = useNavigation();
    const navigateTO = (route)=>{
    navigation.navigate(route)};
  
    return (
    <Header
     backgroundColor='#9098F8'
     rightComponent={<Icon name="sign-out" type="font-awesome" color={"white"} onPress={back?
      ()=>setAut():()=>{navigateTO("Perfil")}}/>}
     leftComponent={
         <Icon name="home" type="font-awesome"
          color={"white"}  onPress={() => {navigateTO("Home")}}/>}
      centerComponent={{ text: tittle, style: styles.heading }}
    />
 );}
 
 export default HeaderApp;


const styles = StyleSheet.create({

heading: {
  color: 'white',
  fontSize: 26,
  fontWeight: 'bold',
},
headerRight: {
  display: 'flex',
  flexDirection: 'row',
  marginTop: 5,
},
subheaderText: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
},
});
     

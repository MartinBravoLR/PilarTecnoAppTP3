//React Imports
import React from 'react'
import {useState,useEffect} from 'react'
import { 
    StyleSheet,
    Text,
    Image,View, 
    TouchableOpacity,
    Dimensions,
    } from 'react-native'

 //React Native ELEMENTS(UI kit)
 import { ListItem, Avatar } from '@rneui/themed'
 import { Icon } from 'react-native-elements'
 import { FlatList } from 'react-native-gesture-handler';
 import { useNavigation } from '@react-navigation/native';  
import { SafeAreaProvider } from 'react-native-safe-area-context';

///Redux Import
import { useSelector, useDispatch } from "react-redux";
import { appSelector, appActions } from "../redux/appRedux";

import  Header from "../Components/Header";
import api, { IMG_URL } from "../services/api";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const ListDetails = (props) => {
///Navigation
  const navigation = useNavigation();
  const navigateTO = (route)=>{
    navigation.navigate(route)
  };

///Hooks and data
  const [pokemons, setPokemons] = useState([]);
  const {url}=props.route.params.data
  const dispatch = useDispatch();


///Async
const fetchData = async (pokemons) => {
   try {
    dispatch(appActions.loading(true))
     const result = await api.GET(url);
     if (result) {
      setPokemons(result);
    
    }
   } catch (error) {
     console.log(error);
   } 
   finally{
    dispatch(appActions.loading(false))

   }
 };	  
 
  
 useEffect(() => {
  fetchData()
    }
  , []);


  ///Body List

  return (

 <SafeAreaProvider style={{flex:1,backgroundColor:"#F0E68C"}}>
  
  {/*Header Icons */}

    <View style={styles.header}>
        <Icon
           reverse
           name='angle-left'
           size={30}
           type='font-awesome'
           color="#9e1b32"
           onPress={() => {navigateTO("Listas") }}
         />     
 
       <Icon    
           name='heart'
           size={50}
           type='font-awesome'
           color="#9e1b32"

          containerStyle={{marginTop:17,right:15}}
         />     
    </View>

      {/*Poke Image */}

    <View style={styles.image_container}>
     

      <Image
          source={{ uri:pokemons?.sprites?.front_default}}
          style={{flex:1,resizeMode:"contain",height:400,width:400}}
        />

    </View>

      {/*Poke Data(NAME,XP,KG,M) */}

    <View style={styles.content}>
         <Image
            source={require("../assets/poke.png")}
            style={{position:"absolute",height:300,left:100,width:300,opacity:0.5,marginTop:200}}
          />
         <View style={styles.Title}>
            <Text  style={{fontSize:45,fontWeight:"bold",textTransform:"capitalize"}} >{pokemons?.name}</Text>
            <Text style={{fontSize:50,fontWeight:"bold",}}>#{pokemons?.id}</Text>
        </View>

    <View style={{flexDirection:"row"}}>

        <View style={styles.specifics}>

        <TouchableOpacity  style={styles.Caracteristics}>
            <Image
            source={require("../assets/reglaa.png")}
            resizeMode="contain"
            style={{width:30,height:30,tintColor:"white",}}
            />
            <Text  style={styles.text} > {pokemons?.height/10} m</Text>
         </TouchableOpacity>

        </View>

        <View style={styles.specifics}>

          <TouchableOpacity  style={styles.Caracteristics}>
            <Image
            source={require("../assets/peso.png")}
            resizeMode="contain"
            style={{width:30,height:30,tintColor:"white",}}
             />
            <Text  style={styles.text} > {pokemons?.weight/10} kg</Text>
          </TouchableOpacity>
        
        </View>
        
     </View>

      <View style={styles.specifics}>
          <TouchableOpacity  style={{...styles.Caracteristics,width:300,marginTop:10}}>
             <Image
             source={require("../assets/base.png")}
             resizeMode="contain"
             style={{width:30,height:30,tintColor:"white",}}
             />
            <Text  style={{...styles.text }} >BASE XP : {pokemons?.base_experience}</Text>
          </TouchableOpacity>
     </View>
   </View>
 </SafeAreaProvider>
  )

}

export default ListDetails

const styles= StyleSheet.create({
  header:{
    paddingHorizontal:20,
    marginTop:30,
  flexDirection:"row",
  justifyContent:"space-between"  
},

  Title:{
   paddingHorizontal:20,
  flexDirection:"row",
  justifyContent:"space-between" 
 },

  specifics:{
  flexDirection:"row",
  justifyContent:"flex-start",
  left:20
}, 

Caracteristics:{
    width:150,
    height:60
    ,elevation:3,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    borderRadius:30,
  },
  image_container:{
    flex:0.45,
    marginTop:20,
    justifyContent:"center",
    alignItems:"center"

  },
  content:{
    flex:0.55,
    backgroundColor:"brown",
    marginHorizontal:20,
    borderRadius:20,
    marginBottom:7,
    paddingTop:30,
  },
  text:{
    fontWeight:"bold",
    color:"white",
    fontSize:30,
    
  }
})

    
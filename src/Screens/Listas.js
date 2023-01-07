import { StyleSheet, Text, View, TouchableOpacity,Image,TouchableHighlight, Dimensions} from 'react-native'
import React from 'react'
import {useState,useEffect} from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context';
import  Header from "../Components/Header";
import { ListItem, Avatar } from '@rneui/themed'
//Redux
import { useSelector, useDispatch } from "react-redux";
import { appSelector, appActions } from "../redux/appRedux";


import api, { IMG_URL } from "../services/api";
import { FlatList } from 'react-native-gesture-handler';
import { Button } from '@rneui/themed';


import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Listas = (props) => {
	///Navigation Functions
  const navigation = useNavigation();
  const navigateTO = (route,data)=>{
    navigation.navigate(route,{data})
  };
  ///Capital Letter
function capitalizarPrimeraLetra(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

  ///Hooks
  const dispatch = useDispatch();

  const [pokemons, setPokemons] = useState(null);
	const [next, setNext] = useState(null);
	const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState(false);

///Async
	useEffect(() => {
    getPokemons()
      }
    , []);
 
  const getPokemons = async () => {
     try {
      dispatch(appActions.loading(true))
       const result = await api.GET(api.pokemons);
       if (result) {
         console.log("poke",result)
         setPokemons(result.results);
         setNext(result.next);
       }
     } catch (error) {
       console.log(error);
     } 
     finally{
      dispatch(appActions.loading(false))

     }
   };	  
    

   ///Flat List

    keyExtractor = (item, index) => index.toString()

    const getPokemonImgId=(id)=>{
      console.log("long."+id.length)
      switch(id.length){
        case 1:
          return `00${id}`
          case 2:
            return `0${id}`
            default:
              return id      }
    }
    
    renderItem = ({ item }) => {
      const path= item.url.split("/")
      const imgID=getPokemonImgId(path[6])
      return(
      <ListItem 
        containerStyle={{left:10,right:20,marginTop:20,borderRadius:10,height:70,TouchableHighlight}}
        pad={20}
        onPress={() => {navigateTO("ListDetails",{url:item.url})}}
      >
        <Avatar title={item.name} size={64}source={{uri:`${IMG_URL}${imgID}.png`}}/>
        <ListItem.Content>
          <ListItem.Title style={{fontSize:25}}>{capitalizarPrimeraLetra(item.name)}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    )}

      //Next List
      const renderFooter=()=>{
        return(
          <View style={{width:"100%",height:120,}}>
          <Button
              title="Cargar más.."
              loading={false}
              buttonStyle={{
                backgroundColor: "#9e1b32",
                borderRadius: 5,
              }}
              titleStyle={{ fontWeight: "500", fontSize: 45 }}
              containerStyle={{
                marginHorizontal: 50,
                height: 190,
                width: 300,
                marginVertical: 10,
              }}
              onPress={()=>loadMore()}
              />
          </View>
        )
      }

      const loadMore= async() =>{
        try {
          dispatch(appActions.loading(true))
          const result=await api.GET(next)
          if(result){
            console.log("poke",result)
            setPokemons([...pokemons,...result.results])
            setNext(result.next)
          }
        } catch (error) {
          console.log(error)
        }
        finally{
          dispatch(appActions.loading(false))
    
         }
      }


  ///Body List

  return (
    <SafeAreaProvider>
      <Header tittle="Pokedex"/>
      <View style={{backgroundColor:"#F0E68C",width:windowWidth,height:windowHeight-80,alignConten:"center"}}>

           <FlatList 
           showsVerticalScrollIndicator={false}
           contentContainerStyle={{
            marginTop:10
           }}
            keyExtractor={this.keyExtractor}
            data={pokemons}
            renderItem={(item)=>renderItem(item)}
            ListFooterComponent={()=>renderFooter()}
    />
         </View>
       </SafeAreaProvider>
  )

}

export default Listas

const styles= StyleSheet.create({
  
  button:{
    justifyContent:"center",
    alignItems:"center",
    borderRadius:50,
    witdh:50,
    height:100

  },
  text:{
    justifyContent:"center",
    color:"white",
    fontSize:40
  }
})

    
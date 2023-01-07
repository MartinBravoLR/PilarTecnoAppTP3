import {React ,useState} from 'react'
import { StyleSheet, Text, View ,Dimensions,ScrollView} from 'react-native'

import {useDispatch,useSelector} from  'react-redux';
import {appActions,appSelector} from  '../redux/appRedux';

import { Button } from "@rneui/base";
import { Icon} from '@rneui/base';
import { Input,CheckBox} from '@rneui/themed';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import  Header from "../Components/Header";

////width and height for devide
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Tareas = () => {

  const handleChange= (e)=>{
    console.log(e)
    setText(e)
  }

  ///Hooks
  const [text,setText]=useState("");
  const [check,setCheck]=useState(false);
  const [error,setError]=useState(false);

/////Const for Redux
const dispatch=useDispatch()
const todo= useSelector(appSelector.todo)

/////ACTIONS
   const addTask=()=>{
dispatch(appActions.addTodo({text:text,id: todo.length*1}))
setText("")
setError(false)

 }
   const delTask=(id)=>{
  dispatch(appActions.deleteTodo(id))
  }

  const handleChecked=(e,id)=>{
  dispatch(appActions.setCompletedTodo({id,completed:(e)}))

  }
  const errorTask=()=>{
    setError(true)
     }

 

return (
    
    <SafeAreaProvider>
    <Header tittle="Tareas" back={false}/>

    <View style={{flex:1,alignItems:"center",backgroundColor:"#FFDF69",justifyContent:"center"}}>

       <View style={{flexDirection:"row"}}>
        <Input  
          placeholder='Nueva Tarea'
          value={text}
          errorMessage={error?"Añade Contenido!!":null}
          errorStyle={{fontSize:20,fontWeight:"bold",color:"#A31F34"}}
          onChangeText={(e)=>handleChange(e)}
          containerStyle={{...styles.inputStyle}}               
        input/>

        <Button
            icon={<Icon name="plus" type="font-awesome"size={75} color="#909ff8F8"/>}
            onPress={text==""?()=>errorTask():() =>addTask() }
            containerStyle={{marginTop:20,marginLeft:15,marginRight:15,borderRadius:15}} 
          />

       </View>
      

   <ScrollView style={{flex:4,width:windowWidth}} >        
  
    {todo.map((t, index)=> 
      <View key={t.id} style={t.completed?{...styles.ContainerTask,borderWidth:3, borderColor:"#7CB9E8"}:{...styles.ContainerTask,
    }}>

      <CheckBox
            checked={t.completed}
            checkedColor="#909ff8F8"
            containerStyle={{ backgroundColor: "#E1EBEE",position:"relative"}}      
            onPress={() =>handleChecked(!t.completed,t.id)}
            size={50}
       />
      <Text key={t.id} style={t.text.length>10?{fontSize:25,width:100,marginTop:10}:{fontSize:35,marginTop:10}}>{t.text}</Text>
  <View style={{justifyContent:"flex-end",padding:10}}>
      <Button
          type="clear"
          icon={<Icon name="trash" type="font-awesome"size={40} color="#A31F34"  />}
          onPress={() => delTask(t.id)}
        />
</View>
    </View>
    )}
  
  </ScrollView>
  </View>

      
    </SafeAreaProvider>

  )
}

export default Tareas

const styles= StyleSheet.create({
  inputStyle: {
    width:300,
    height:90,
    backgroundColor:"white",
    borderRadius:20,
    marginTop:20,
    marginLeft:20
},
ContainerTask:{
  width:windowWidth-20,
  borderRadius:20,
  flexDirection:"row",
  marginTop:30,
  marginLeft:10,
  justifyContent:"space-between",
  backgroundColor:"#E1EBEE"
}


  
})

   
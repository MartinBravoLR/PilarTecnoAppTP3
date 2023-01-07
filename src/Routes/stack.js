import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import Login from "../Screens/Login";
import { AppTab } from './tab';
import Tareas from "../Screens/Tareas";
import ListDetails from "../Screens/ListDetails";

import { NavigationContainer } from '@react-navigation/native';

import {useSelector} from  'react-redux';
import {appSelector} from  '../redux/appRedux';


const Stack=createNativeStackNavigator();

export const AppStack=() =>{

    const USER=useSelector(appSelector.user)
    return(
        
        <Stack.Navigator initialRouteName="Home"screenOptions={{headerShown:false}}>
            {
                USER?
        
            <Stack.Screen name ="Main" component ={AppTab}/>
            
            : 
            <Stack.Screen name ="Login" component ={Login}/>

            }
         <Stack.Screen name ="Tareas" component ={Tareas}/>
         <Stack.Screen name ="ListDetails" component ={ListDetails}/>

        </Stack.Navigator>
    );
}


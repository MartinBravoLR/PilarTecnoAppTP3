import React from 'react';

import "react-native-gesture-handler";

///Redux Import
import {Provider} from  'react-redux';
import store from  '../redux/store';

///Navigations Imports
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from '../Routes/stack';

const App=() => {
  return (
    <Provider store={store}>
       <NavigationContainer>
        <AppStack/>
      </NavigationContainer>
    </Provider>
  );}


export default App;

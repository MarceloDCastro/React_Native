import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//components
import Home from './src/components/Home/index';
import Filme from './src/components/Filme/index';


import api from './src/services/api';

function App(){

  const Stack = createStackNavigator();

    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="App de Filmes" component={Home} />
          <Stack.Screen name="Sobre o Filme" component={Filme} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default App;
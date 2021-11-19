import React, { Component } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Páginas
import Formulario from './src/pages/Formulario';
import Resposta from './src/pages/Resposta';

const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Formulario" component={Formulario} options={{ title:'Abertura de Conta', headerStyle:{backgroundColor: 'blue'}, headerTintColor: '#FFF'}} />
        <Stack.Screen name="Resposta" component={Resposta} options={{ title:'Dados Informados', headerStyle:{backgroundColor: 'blue'}, headerTintColor: '#FFF'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

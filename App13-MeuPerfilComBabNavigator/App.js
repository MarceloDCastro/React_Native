import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Páginas
import Experiencia from './src/pages/Experiencia';
import Formacao from './src/pages/Formacao';
import Pessoal from './src/pages/Pessoal';

const Tab = createBottomTabNavigator();

const icons = {
  Pessoal:{
    name: 'person',
  },
  Formacao:{
    name: 'school',
  },
  Experiencia:{
    name: 'desktop-sharp',
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={ ({route}) => ({
          tabBarIcon: ({ color, size }) => {
            const { name } = icons[route.name];
            return <Icon name={name} color={color} size={size} />
          }
        }) }

        tabBarOptions={{
          style:{
            backgroundColor: '#121212'
          },
          activeTintColor: '#000'
        }}
      >
        <Tab.Screen name="Pessoal" component={Pessoal} />
        <Tab.Screen name="Formacao" component={Formacao} options={{title: 'Formação'}} />
        <Tab.Screen name="Experiencia" component={Experiencia} options={{title: 'Experiência'}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
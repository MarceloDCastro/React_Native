import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Páginas
import Experiencia from './src/pages/Experiencia';
import Formacao from './src/pages/Formacao';
import Pessoal from './src/pages/Pessoal';

import CustomDrawer from './src/components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={CustomDrawer}>
        <Drawer.Screen name="Pessoal" component={Pessoal} />
        <Drawer.Screen name="Formacao" component={Formacao} />
        <Drawer.Screen name="Experiencia" component={Experiencia} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

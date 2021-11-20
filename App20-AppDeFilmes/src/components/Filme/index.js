import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

export default function Sobre( {route} ) {

  return (
  <View style={styles.container}>
    <Text style={styles.titulo}>{route.params.nome}</Text>
    <Text style={styles.texto}>     {route.params.sinopse}</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    height: '100%',
    backgroundColor: 'white',
    padding: 15
  },
  titulo:{
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20
  },
  texto:{
    fontSize: 16
  }
});

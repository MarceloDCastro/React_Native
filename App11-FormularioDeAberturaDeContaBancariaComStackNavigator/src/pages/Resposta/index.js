import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Pressable, Picker, Slider, Switch, ScrollView } from 'react-native';
import { styles } from '../style';

export default function Resposta( {route} ) {
    return (
      <View style={styles.container}>
          <Text style={styles.dados}>Nome: {route.params?.nome}</Text>
          <Text style={styles.dados}>Idade: {route.params.idade} anos</Text>
          <Text style={styles.dados}>Sexo: {route.params?.sexo}</Text>
          <Text style={styles.dados}>Escolaridade: {route.params?.escolaridade}</Text>
          <Text style={styles.dados}>Limite: {route.params?.limite}</Text>
          <Text style={styles.dados}>Brasileiro: {route.params?.brasileiro ? 'Sim' : 'Não'}</Text>
        </View>
  );
}
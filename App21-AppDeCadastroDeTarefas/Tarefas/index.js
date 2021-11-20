import React, {Component, useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Text, Button} from 'react-native';
import api from '../src/services/api';
import { useNavigation } from '@react-navigation/native';

import Card from '../src/components/Card/index';

export default function Tarefa(){
  const [tarefas, setTarefas] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect( async () => {
    await getTarefas();
    setLoad(false);
  }, []);

  const getTarefas = async () => {
    const response = await api.get('/tasks');
    setTarefas(response.data);
  }

  const navigation = useNavigation();

  if(load){
    return (<Text>Carregando...</Text>);
  } else{
    return(
    <View style={styles.tarefas}>
      <Button title="Adicionar Tarefa" onPress={() => {navigation.navigate('Formulario', {atualizarLista: getTarefas})}}/>
        <FlatList
        data={tarefas}
        keyExtractor={item => item.id.toString() }
        renderItem={ ({item}) => <Card data={item}
        carregarTarefas={getTarefas} /> }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
 tarefas:{
   width: '100%',
   padding: 15
 }
});

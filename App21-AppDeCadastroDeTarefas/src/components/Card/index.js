import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

function Card({data, carregarTarefas}){
  const [id, setId] = useState(data?.id);
  const [title, setTitle] = useState(data?.title);
  const [description, setDescription] = useState(data?.description);

  const excluirTarefa = async () => {
    const response = await api.delete(`/tasks/${id}`);
    await carregarTarefas();
  }

  const navigation = useNavigation();
  
  return(
    <View style={styles.card}>
      <Text style={styles.titulo}>{title}</Text>
      <Text style={styles.descricao}>{description}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttonEditar} onPress={navigation.navigate('Formulario', {
          id: id, 
          title: title, 
          description: description, 
          atualizarLista: carregarTarefas
          })}>
          <Text>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonExcluir} onPress={excluirTarefa}>
          <Text>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
 card:{
   borderWidth: 1,
   borderRadius: 5,
   margin: 5
 },
 titulo:{
  borderBottomWidth: 1,
  fontSize: 18,
  fontWeight: "bold"
 },
 descricao: {
   fontSize: 16
 },
 buttons: {
   display: "flex",
   justifyContent: "space-around",
   flexDirection: "row",
   paddingVertical: 2
 },
 buttonEditar:{
   backgroundColor: 'yellow',
   padding: 4,
   borderRadius: 5,
   borderWidth: 1
 },
 buttonExcluir:{
   backgroundColor: 'red',
   padding: 4,
   borderRadius: 5,
   borderWidth: 1
 }
});
export default Card;

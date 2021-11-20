import React, { Component, useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import { Picker } from '@react-native-community/picker';

//components
import Card from '../Card/index';

import api from '../../services/api';

function Home(){

  const [filmes ,setFilmes] = useState([]);
  const [load ,setLoad] = useState(true);

  useEffect(()=>{
    getFilmes();
  }, [])

  const getFilmes = () => {
    setLoad(true);
    api.get('https://sujeitoprogramador.com/r-api/?api=filmes')
    .then( (response)=>{
      setFilmes(response.data);
    }
    )
    .catch(error => {
      console.log(error);
    })
    .finally(()=>{
      setLoad(false);
    })
  }

    return(
      <View style={styles.container}>
        <ScrollView style={styles.filmes}>
        { 
          load ? (<Text>Carregando...</Text>) : filmes.map((filme)=>(
              <Card filme={filme} />
          ))
        }
        </ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: "center",
    backgroundColor: 'white'
  },
  filmes:{
    width: '100%',
  }
});

export default Home;
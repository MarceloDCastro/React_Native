import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Card (props) {

  const navigation = useNavigation();

  const filme = {
    nome: props.filme.nome,
    foto: props.filme.foto,
    sinopse: props.filme.sinopse
  }

    return(
      <View style={styles.card}>
        <View style={styles.headerCard}>
          <Text style={styles.titulo}>{filme.nome}</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sobre o Filme',{ nome: filme.nome, sinopse: filme.sinopse})}>
            <Text style={styles.buttonTxt}>Leia mais</Text>
          </TouchableOpacity>
        </View>
        <Image 
        source={{uri: filme.foto}}
        style={styles.img} />
      </View>
    )
}

const styles = StyleSheet.create({
  card:{
    margin: 15,
    marginBottom: 10
  },
  headerCard:{
    width: '100%',
    display: 'flex',
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },
  titulo:{
    fontSize: 25,
    fontWeight: "bold",
  },
  button:{
    backgroundColor: 'crimson',
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 5,
  },
  buttonTxt:{
    color: 'white',
    fontSize: 16,
  },
  img:{
    width: '100%', 
    height: 200,
  },
});
import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import Anuncio from './Anuncio/index';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      produtos:[
        {id: 1, nome: "Fita led 5050 12V", descricao: "Fita led na cor azul, com controle  bluetooth e USB.", valor: "25,00", img: "https://www.imperialled.com.br/app/fotos/21585df4a73068783bc23de72d0d87bd.jpg"},
        {id: 2, nome: "Lâmpada inteligente 15w b22 e27 led rgb", descricao: "Lâmpada inteligente com wi-fi. Funciona com Alexa e Google Assistant.", valor: "50,00", img: "https://ae01.alicdn.com/kf/H52f8455b0b95471e9db989c23679937fC/15w-wifi-inteligente-l-mpada-b22-e27-led-rgb-trabalho-com-alexa-google-casa-85-265v.jpg_Q90.jpg_.webp"},
        {id: 3, nome: "Caneta Laser Verde 5mw 650nm", descricao: "Caneta ponteiro laser preta com feixe de luz forte na cor verde.", valor: "5,00", img: "https://i.ebayimg.com/thumbs/images/g/kOAAAOSwMkhdd9-2/s-l300.jpg"}
      ]
    }
    
  }

  render(){
    return (
    <View>
      <View style={styles.header}>
        <Text style={styles.titulo}>Anúncios</Text>
      </View>
        <FlatList
          data={this.state.produtos}
          keyExtractor={(item) => item.id}
          renderItem={ ({item}) => <Anuncio data={item}/>}
          horizontal={true}
        />

    </View>
  );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#2ecc71",
    padding: 8
  },
  titulo: {
    fontSize: 30,
    marginTop: 20,
    textAlign: "center"
  },
  
});

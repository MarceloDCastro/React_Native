import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {styles} from './styles';

class Anuncio extends Component{
  render(){
    return(
      <View style={styles.card}>
          <Image source={{uri: this.props.data.img}} style={styles.img} />
          <Text style={styles.nome}>{this.props.data.nome}</Text>
          <Text style={styles.descricao}>{this.props.data.descricao}</Text>
          <Text style={styles.valor}>R$ {this.props.data.valor}</Text>
        </View>
    );
  }
}
export default Anuncio;

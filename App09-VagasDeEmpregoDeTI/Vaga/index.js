import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {styles} from './styles';

class Vaga extends Component{
  render(){
    return(
      <View style={styles.card}>
          <Text style={styles.nome}>{this.props.data.nome}</Text>
          <Text style={styles.salario}>Salário: R$ {this.props.data.salario}</Text>
          <Text style={styles.descricao}>{this.props.data.descricao}</Text>
          <Text style={styles.contato}>Contato: {this.props.data.contato}</Text>
        </View>
    );
  }
}
export default Vaga;

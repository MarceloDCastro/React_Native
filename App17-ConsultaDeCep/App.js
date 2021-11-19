import React, { Component } from 'react';
import { View, StyleSheet, FlatList, TextInput, Text, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import api from './src/services/api';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      ceps: [],
      input: ""
    };
    this.getCep = this.getCep.bind(this);
  }

  async getCep(){
    const cep = this.state.input;
    const response = await api.get(`/${cep}/json`);
    this.setState({
      ceps: response.data
    }); 
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>CEP x Endereço</Text>
        <View style={{ flexDirection:"row" }}>
          <TextInput
          style={styles.input} 
          keyboardType="numeric" 
          placeholder="Digite o CEP" 
          value={this.state.input} 
          onChangeText={(valor) => { this.setState({ input: valor }) }} 
          />
          <TouchableOpacity
          style={{ borderRadius: 5, backgroundColor:"lightgreen", padding: 5, marginLeft: 10, borderWidth: 1 }}
          onPress={this.getCep}
          >
            <FontAwesome name='search' size={30} color='#000' />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.cep}>{(this.state.ceps.cep)}</Text>
          <Text style={styles.dados}>{(this.state.ceps.cep) ? "Logradouro: " : ""} {this.state.ceps.logradouro}</Text>
          <Text style={styles.dados}>{(this.state.ceps.cep) ? "Complemento: " : ""} {this.state.ceps.complemento}</Text>
          <Text style={styles.dados}>{(this.state.ceps.cep) ? "Bairro: " : ""} {this.state.ceps.bairro}</Text>
          <Text style={styles.dados}>{(this.state.ceps.cep) ? "Cidade: " : ""} {this.state.ceps.localidade}</Text>
          <Text style={styles.dados}>{(this.state.ceps.cep) ? "Estado: " : ""} {this.state.ceps.uf}</Text>
          <Text style={styles.dados}>{(this.state.ceps.cep) ? "DDD: " : ""} {this.state.ceps.ddd}</Text>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  titulo:{
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
    marginBottom: 20
  },
  container:{
    flex:1,
    alignItems: "center"
  },
  input:{
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    paddingHorizontal: 5,
    fontSize: 22
  },
  cep:{
    fontSize: 18,
    padding: 15,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 10
  },
  dados:{
    fontSize: 16,
    padding: 5,
  },
});

export default App;
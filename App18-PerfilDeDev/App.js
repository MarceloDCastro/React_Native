import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import api from './src/services/api';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      git: [],
      input: ""
    };
    this.getGit = this.getGit.bind(this);
  }

  async getGit(){
    const login = this.state.input;
    const response = await api.get(`/${login}`);
    this.setState({
      git: response.data
    }); 
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Perfil dos Devs</Text>
        <Image
        source={{uri: (this.state.git.avatar_url) ? this.state.git.avatar_url : 'https://www.promoview.com.br/uploads/images/unnamed%2819%29.png'}}
        style={styles.img}
        />
        <View style={{ flexDirection:"row" }}>
          <TextInput
          style={styles.input}
          placeholder="Digite o login do git" 
          value={this.state.input} 
          onChangeText={(valor) => { this.setState({ input: valor }) }} 
          />
          <TouchableOpacity
          style={{ borderRadius: 5, backgroundColor:"lightgreen", padding: 5, marginLeft: 10, borderWidth: 1 }}
          onPress={this.getGit}
          >
            <FontAwesome name='search' size={30} color='#000' />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.notfound}>{(this.state.git.message) ? "Usuário não Encontrado" : ""} {this.state.git.message}</Text>
          <Text style={styles.dados}>{(this.state.git.id) ? "Id: " : ""} {this.state.git.id}</Text>
          <Text style={styles.dados}>{(this.state.git.id) ? "Nome: " : ""} {this.state.git.name}</Text>
          <Text style={styles.dados}>{(this.state.git.id) ? "Repositórios: " : ""} {this.state.git.public_repos}</Text>
          <Text style={styles.dados}>{(this.state.git.id) ? "Criado em: " : ""} {this.state.git.created_at}</Text>
          <Text style={styles.dados}>{(this.state.git.id) ? "Seguidores: " : ""} {this.state.git.followers}</Text>
          <Text style={styles.dados}>{(this.state.git.id) ? "Seguindo: " : ""} {this.state.git.following}</Text>
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
    marginBottom: 10
  },
  container:{
    flex:1,
    alignItems: "center"
  },
  input:{
    borderWidth: 1,
    borderRadius: 5,
    width: 250,
    paddingHorizontal: 5,
    fontSize: 22
  },
  dados:{
    fontSize: 16,
    padding: 5,
  },
  img:{
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 10
  }
});

export default App;
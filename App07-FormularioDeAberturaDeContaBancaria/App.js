import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Pressable, Picker, Slider, Switch, ScrollView } from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputNome:"",
      inputIdade:"",
      inputSexo: 1,
      inputEscolaridade: 1,
      inputLimite: 200,
      inputBrasileiro: "",
      msg: ""
    }
    this.confirmar = this.confirmar.bind(this);
  }

  confirmar(){
    if(this.state.inputNome == "" || this.state.inputIdade == ""){
      this.setState({msg: "Existem campos não preenchidos!"});
    } else{
      this.setState({nome: this.state.inputNome});
      this.setState({idade: this.state.inputIdade});
      switch (this.state.inputSexo){
        case 1:
          this.setState({sexo: "Masculino"});
          break;
        case 2:
          this.setState({sexo: "Feminino"});
          break;
        case 3:
          this.setState({sexo: "Outros"});
          break;
      }
      switch (this.state.inputEscolaridade){
        case 1:
          this.setState({escolaridade: "Ensino Fundamental"});
          break;
        case 2:
          this.setState({escolaridade: "Ensino Médio"});
          break;
        case 3:
          this.setState({escolaridade: "Ensino Superior"});
          break;
      }
      this.setState({limite: this.state.inputLimite});
      this.setState({brasileiro: (this.state.brasileiro) ? "Sim" : "Não"});
      this.setState({msg: ""});
    }
  } 

  render(){
    return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={ styles.titulo }>Abertura de Conta</Text>

        <View style={styles.grupo}>
          <Text style={styles.str}>Nome:</Text>
          <TextInput style={styles.input} onChangeText={ (txt) => this.setState({inputNome: txt})}></TextInput>
        </View>

        <View style={styles.grupo}>
          <Text style={styles.str}>Idade:</Text>
          <TextInput style={styles.input} keyboardType='numeric' onChangeText={ (txt) => this.setState({inputIdade: txt})}></TextInput>
        </View>

        <View style={styles.grupo}>
          <Text style={styles.str}>Sexo:</Text>
          <Picker style={{width: 140}} selectedValue={this.state.inputSexo} onValueChange={(id,index) => {this.setState({inputSexo: id})}}>
            <Picker.item key={1} value={1} label="Masculino" />
            <Picker.item key={2} value={2} label="Feminino" />
            <Picker.item key={3} value={3} label="Outros" />
          </Picker>
        </View>

        <View style={styles.grupo}>
          <Text style={styles.str}>Escolaridade:</Text>
          <Picker style={{width:210}} selectedValue={this.state.inputEscolaridade} onValueChange={(id,index) => this.setState({inputEscolaridade: id})}>
            <Picker.item key={1} value={1} label="Ensino Fundamental" />
            <Picker.item key={2} value={2} label="Ensino Médio" />
            <Picker.item key={3} value={3} label="Ensino Superior" />
          </Picker>
        </View>

        <View style={styles.grupo}>
          <Text style={styles.str}>Limite:</Text>
          <Slider minimumValue={0} maximumValue={1000} step={1} value={this.state.inputLimite} onValueChange={(valor) => this.setState({inputLimite : valor})} />
          <Text style={styles.limite}>{this.state.inputLimite}</Text>
        </View>

        <View style={styles.grupo}>
          <Text style={styles.str}>Brasileiro:</Text>
          <Switch style={styles.switch} value={this.state.inputBrasileiro} onValueChange={(valor) => this.setState({inputBrasileiro: valor})} />
        </View>

        <Text style={styles.msg}>{this.state.msg}</Text>

        <Pressable style={styles.botao} onPress={this.confirmar}>
          <Text style={styles.textoBotao}>Confirmar</Text>
        </Pressable>

        <View>
          <Text style={styles.titulo}>Dados Informados:</Text>
          <Text style={styles.dados}>Nome: {this.state.nome}</Text>
          <Text style={styles.dados}>Idade: {this.state.idade}</Text>
          <Text style={styles.dados}>Sexo: {this.state.sexo}</Text>
          <Text style={styles.dados}>Escolaridade: {this.state.escolaridade}</Text>
          <Text style={styles.dados}>Limite: {this.state.limite}</Text>
          <Text style={styles.dados}>Brasileiro: {this.state.brasileiro}</Text>
        </View>
      </ScrollView>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  titulo: {
    fontSize: 30,
    margin: 20,
    textAlign: "center"
  },
  grupo: {
    margin: 5
  },
  str: {
    fontSize: 20,
  },
  input: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    fontSize: 18,
    padding: 2,
  },
  limite: {
    textAlign: "center",
    fontSize: 16
  },
  msg:{
    color: "#F00",
    textAlign: "center"
  },
  botao: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#bbb',
    padding: 4
  },
  textoBotao: {
    fontSize: 20,
    textAlign: "center",
  },
  dados: {
    fontSize: 20
  }
});

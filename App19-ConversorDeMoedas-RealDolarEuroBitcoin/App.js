import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Picker } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import api from './src/services/api';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      valor:"",
      de:"BRL",
      para:"USD",
      resultado:[]
    };
    this.converter = this.converter.bind(this);
  }

  async converter(){
    if(this.state.valor == ''){
      this.setState({ resultado: "Digite o valor!" })
    } else{
      let valor = parseInt(this.state.valor);
      let de = this.state.de;
      let para = this.state.para;
      let final = this.state.de + this.state.para;
      console.log(this.state.valor, this.state.de, this.state.para);
      let response = await api.get(`https://economia.awesomeapi.com.br/json/last/${de}-${para}`);
      var resultado = 0;

    switch(de){
      case "BRL":
        switch(para){
          case "USD":
            resultado = (response.data.BRLUSD.bid * valor).toFixed(2);
            break;
          case "EUR":
            resultado = (response.data.BRLEUR.bid * valor).toFixed(2);
            break;
        }
        break;
      case "USD":
        switch(para){
          case "BRL":
            resultado = (response.data.USDBRL.bid * valor).toFixed(2);
            break;
          case "EUR":
            resultado = (response.data.USDEUR.bid * valor).toFixed(2);
            break;
        }
        break;
      case "EUR":
        switch(para){
          case "USD":
            resultado = (response.data.EURUSD.bid * valor).toFixed(2);
            break;
          case "BRL":
            resultado = (response.data.EURBRL.bid * valor).toFixed(2);
            break;
        }
        break;
      case "BTC":
        switch(para){
          case "USD":
            resultado = (response.data.BTCUSD.bid * valor).toFixed(2);
            break;
          case "EUR":
            resultado = (response.data.BTCEUR.bid * valor).toFixed(2);
            break;
          case "BRL":
            resultado = (response.data.BTCBRL.bid * valor * 1000).toFixed(2);
            break;
        }
        break;
    }
      console.log(resultado);
      this.setState({
        resultado: resultado
      });
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Conversor de Moedas</Text>
        <View style={styles.grupo}>
          <Text style={styles.texto}>Valor</Text>
          <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Digite o valor"
          value={this.state.valor} 
          onChangeText={(value) => { this.setState({ valor: value }) }} 
          />
        </View>
        <View style={styles.grupo}>
          <Text style={styles.texto}>De</Text>
          <Picker
          style={styles.picker}
          selectedValue={this.state.de}
          onValueChange={(valor) => { this.setState({ de: valor }) }}
          >
            <Picker.Item key={1} value={'BRL'} label="Real" />
            <Picker.Item key={2} value={'EUR'} label="Euro" />
            <Picker.Item key={3} value={'USD'} label="Dólar" />
            <Picker.Item key={4} value={'BTC'} label="Bitcoin" />
          </Picker>
        </View>
        <View style={styles.grupo}>
          <Text style={styles.texto}>Para</Text>
          <Picker
          style={styles.picker}
          selectedValue={this.state.para}
          onValueChange={(valor) => { this.setState({ para: valor }) }}
          >
            { (this.state.de == 'BRL')? '' : <Picker.Item key={1} value={'BRL'} label="Real" /> }
            { (this.state.de == 'USD')? '' : <Picker.Item key={3} value={'USD'} label="Dólar" /> }
            { (this.state.de == 'EUR')? '' : <Picker.Item key={2} value={'EUR'} label="Euro" /> }
          </Picker>
        </View>
         <TouchableOpacity
          style={{ borderRadius: 5, backgroundColor:"lightgreen", padding: 5, marginLeft: 10, borderWidth: 1, flexDirection: "row", margin: 10 }}
          onPress={this.converter}
          >
            <Text style={{ fontSize: 22, marginRight: 10 }}>Converter</Text>
            <FontAwesome name='exchange' size={30} color='#000' />
          </TouchableOpacity>
        <View>
          <Text style={{ fontSize: 26, margin: 10 }}>{this.state.resultado}</Text>
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
    width: 250,
    paddingHorizontal: 5,
    fontSize: 22
  },
  grupo:{
    flexDirection:"row",
    alignItems: "center",
    margin: 10
  },
  texto:{
    fontSize: 22,
    marginRight: 10
  },
  picker:{
    width: 120,
    fontSize: 20,
  }
});

export default App;
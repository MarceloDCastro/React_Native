import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Picker, Pressable, ScrollView} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      //1: Real, 2: Dólar, 3: Euro
      de: 1,
      para: 2,
      valor: ""
    }
    this.converter = this.converter.bind(this);
  }

  converter(){
      var de = 0;
      var para = 0;
      var valor = this.state.valor;
      switch (this.state.de){
        case 1:
          de = 1;
          break;
        case 2:
          de = 5.22;
          break;
        case 3:
          de = 6.17;
          break;
      }
      switch (this.state.para){
        case 1:
          para = 1;
          break;
        case 2:
          para = 5.22;
          break;
        case 3:
          para = 6.17;
          break;
      }
      var r = (de * valor) / para;
      this.setState({resultado: 'R$ ' + r.toFixed(2)})
  }

  render(){
    return (
    <View>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.titulo}>Conversor de Moedas</Text>
          <Text style={styles.titulo}>Dólar, Real e Euro</Text>
        </View>
        <View style={styles.grupo}>
          <Text style={styles.str}>Valor:</Text>
          <TextInput style={styles.input} keyboardType='numeric' placeholder='Ex: 99.99' onChangeText={(txt) => this.setState({valor: txt})}></TextInput>
        </View>

        <View style={styles.grupo}>
          <Text style={styles.str}>De:</Text>
          <Picker style={styles.picker} selectedValue={this.state.de} onValueChange={(id,index) => this.setState({de: id})}>
            <Picker.Item key={1} value={1} label="Real" />
            <Picker.Item key={2} value={2} label="Dólar" />
            <Picker.Item key={3} value={3} label="Euro" />
          </Picker>
        </View>

        <View style={styles.grupo}>
          <Text style={styles.str}>De:</Text>
          <Picker style={styles.picker} selectedValue={this.state.para} onValueChange={(id,index) => this.setState({para: id})}>
            <Picker.Item key={1} value={1} label="Real" />
            <Picker.Item key={2} value={2} label="Dólar" />
            <Picker.Item key={3} value={3} label="Euro" />
          </Picker>
        </View>

        <Pressable style={styles.botao} onPress={this.converter}>
          <Text style={styles.botaoTxt}>Converter</Text>
        </Pressable>

        <View style={styles.grupo}>
          <Text style={styles.strResultado}>Resultado:</Text>
          <Text style={styles.resultado}>{this.state.resultado}</Text>
        </View>
      </ScrollView>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#2ecc71",
    padding: 8,
    paddingTop: 25
  },
  titulo: {
    fontSize: 30,
    textAlign: "center"
  },
  grupo:{
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: "center"
  },
  str:{
    fontSize: 25,
    marginTop: 20
  },
  input:{
    fontSize: 25,
    borderBottomWidth: 1,
    width: '70%',
    textAlign: "center"
  },
  picker:{
    width: 110,
  },
  strResultado:{
    fontSize: 25,
    marginTop: 30
  },
  resultado:{
    fontSize: 25,
    color: '#090'
  },
  botao:{
    borderWidth: 1,
    width: '70%',
    alignItems: "center",
    borderRadius: 5,
    padding: 3,
    backgroundColor: '#2ccf71',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10
  },
  botaoTxt:{
    fontSize: 20
  },
  msg:{
    color: '#F00'
  }
  });

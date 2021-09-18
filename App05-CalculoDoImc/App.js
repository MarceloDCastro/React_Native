import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Image} from 'react-native';

class App extends Component{
	constructor(props){
		super(props);
		this.state= {
			peso: 0,
      altura: 0,
      resultado: 0,
      texto: ""
		};

    this.calcular = this.calcular.bind(this);
	}

  calcular(){
    this.setState({ resultado: this.state.peso/(this.state.altura * this.state.altura)});
    if (this.state.resultado < 18.5){
      this.setState({texto: "Abaixo do peso!"});
    } else if (this.state.resultado > 18.5 && this.state.resultado < 25){
      this.setState({texto: "Peso normal!"});
    } else if (this.state.resultado > 25 && this.state.resultado < 30){
      this.setState({texto: "Sobrepeso!"});
    } else if (this.state.resultado > 30 && this.state.resultado < 35){
      this.setState({texto: "Obesidade Grau I!"});
    } else if (this.state.resultado > 35 && this.state.resultado < 40){
      this.setState({texto: "Obesidade Grau II!"});
    } else if (this.state.resultado > 40){
      this.setState({texto: "Obesidade Grau III!"});
    }
  }

	render(){
		return(
			<View>

			  <Text style={styles.texto}> Cálculo do IMC </Text>

        <Image source={{uri:'https://meubemestarhome.files.wordpress.com/2019/03/imc-formula.jpg'}} style={styles.img} />

        <TextInput style={styles.input} placeholder="Peso (Ex: 70)" onChangeText={ (val) => this.setState({peso: val}) } keyboardType='numeric'
			  />
        <TextInput style={styles.input} placeholder="Altura (Ex: 1.70)" onChangeText={ (val) => this.setState({altura: val})} keyboardType='numeric'
			  />

        <Button title="Calcular" onPress={this.calcular} />

        <Text style={styles.texto}> ({this.state.resultado.toFixed(2)}) {this.state.texto} </Text>
        
			</View>
		);
	}

} 

const styles = StyleSheet.create({
	texto:{
		textAlign: 'center',
		fontSize: 25,
		marginTop: 40,
    marginBottom: 10
	},
  input:{
    marginHorizontal: 50,
    marginVertical: 10,
    fontSize: 20,
    borderBottomWidth: 1
  },
  img:{
    width:310,
    height:80,
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
})

export default App;
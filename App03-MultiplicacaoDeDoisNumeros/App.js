import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable} from 'react-native';

class App extends Component{
	constructor(props){
		super(props);
		this.state= {
			numUm: 0,
			numDois: 0,
			texto: '',
		};
		
		this.multiplicar = this.multiplicar.bind(this);
	}
	
	multiplicar(){
		if(this.state.numUm === 0 || this.state.numDois === 0){
			alert('Preencha os campos!');
		} else{
			var resultado = this.state.numUm * this.state.numDois;
			this.setState({texto: this.state.numUm + ' x ' + this.state.numDois + ' = ' + resultado});
		}
	}
	
	render(){
		return(
			<View>

      <Text style={styles.titulo}>Multiplicador de Números</Text>

          <TextInput style={styles.input} placeholder="Digite um número" onChangeText={ (num) => this.setState({numUm: num}) } keyboardType='numeric'
          />
          
          <TextInput style={styles.input} placeholder="Digite um número" onChangeText={ (num) => this.setState({numDois: num}) } keyboardType='numeric'
          />
			  
			  <Pressable style={styles.botao} onPress={this.multiplicar}>
          <Text style={ styles.botaoTxt}>Calcular</Text>
        </Pressable>
		 
        <Text style={styles.titulo}>Resultado:</Text>
			  <Text style={styles.texto}> {this.state.texto} </Text>
			</View>

		);
	}

}

const styles = StyleSheet.create({
  titulo:{
    fontSize: 30,
    margin: 30,
    textAlign: "center"
  },
	input:{
		height: 45,
		borderWidth: 1,
		borderColor: '#444',
		margin: 10,
		fontSize: 20,
		padding: 10,
    textAlign: "center"
	},
	texto:{
		textAlign: 'center',
		fontSize: 25,
		color: 'green'
	},
  botao:{
    borderWidth: 1,
    alignItems: "center",
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#2ecc71',
    padding: 3,
    borderRadius: 5
  },
  botaoTxt:{
    fontSize: 25
  }
})

export default App;
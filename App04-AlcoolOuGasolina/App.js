import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Image} from 'react-native';

class App extends Component{
	constructor(props){
		super(props);
		this.state= {
			precoAlcool: 0,
      precoGasolina: 0,
      resultado: 0,
      texto: ""
		};

    this.calcular = this.calcular.bind(this);
	}

  calcular(){
    this.setState({ resultado: this.state.precoAlcool/this.state.precoGasolina});
    if (this.state.resultado < 0.7){
      this.setState({texto: "Álcool é melhor!"});
    } else if (this.state.resultado > 0.7){
      this.setState({texto: "Gasolina é melhor!"});
    } else{
      this.setState({texto: "Tanto faz!"});
    }
  }

	render(){
		return(
			<View>
			  <Text style={styles.texto}> Álcool ou Gasolina </Text>

        <Image source={{uri:'https://wp-midia-nova.bidu.com.br/uploads/2017/01/05175045/%C3%A1lcool.png'}} style={styles.img} />

        <TextInput style={styles.input} placeholder="Valor do Álcool/Litro" onChangeText={ (val) => this.setState({precoAlcool: val}) } keyboardType='numeric'
			  />
        <TextInput style={styles.input} placeholder="Valor da Gasolina/Litro" onChangeText={ (val) => this.setState({precoGasolina: val})} keyboardType='numeric'
			  />

        <Button title="Calcular" onPress={this.calcular} />

        <Text style={styles.texto}> ({this.state.resultado}) {this.state.texto} </Text>

			
			</View>
		);
	}

} 

const styles = StyleSheet.create({
	texto:{
		textAlign: 'center',
		fontSize: 30,
		marginTop: 50,
    marginBottom: 20
	},
  input:{
    marginHorizontal: 50,
    marginVertical: 10,
    fontSize: 20,
    borderBottomWidth: 1
  },
  img:{
    width: 310,
    height:170,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10
  }
})

export default App;
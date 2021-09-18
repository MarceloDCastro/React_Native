import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, Image} from 'react-native';

class App extends Component{
	constructor(props){
		super(props);
		this.state= {
		};

    this.descobrir = this.descobrir.bind(this);
	}

  descobrir(){
    this.setState({ numero: Math.floor(Math.random() * 10)});
  }

	render(){
		return(
			<View>
			  <Text style={styles.texto}> Jogo do Nº Aleatório </Text>

        <Image source={{uri:'https://rlv.zcache.com.br/adesivo_redondo_ponto_de_interrogacao_preto-r4f20880c94de4cdf8d33b29d763efc04_0ugmm_8byvr_540.jpg'}} style={styles.img} />

        <Text style={styles.texto}> Pense em um nº de 0 a 10 </Text>

        <Text style={styles.input} placeholder="Digite um número de 0 a 10" onChangeText={ (val) => this.setState({nUsuario: val})} />

        <Text style={styles.resultado}> {this.state.numero} </Text>

        <Pressable style={styles.botao} onPress={this.descobrir}>
          <Text style={styles.botaoTxt}>Descobrir</Text>
        </Pressable>
			
			</View>
		);
	}

} 

const styles = StyleSheet.create({
	texto:{
		textAlign: 'center',
		fontSize: 25,
		marginTop: 40
	},
  img:{
    width: 300,
    height: 300,
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  resultado:{
    width: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginBottom: 20,
    textAlign: "center"
  },
  botao:{
    padding: 3,
    borderWidth: 1,
    width: '50%',
    alignItems: "center",
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#2ecc71'
  },
  botaoTxt:{
    fontSize: 20
  }
})

export default App;
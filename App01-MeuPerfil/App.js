import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';

class App extends Component {
	render(){
  	let nome = "Marcelo de Castro Marieto Silva";
		let email = "marcelodecastro.ms@gmail.com";
    let dtNascimento = "24/09/2001";
		let facu = "Fatec Rubes Lara";
    let curso = "Sistemas para Internet";
    let ciclo = "6";
    let git = "https://github.com/MarceloDCastro";

		return(
			<View style={styles.container}>
				<Image source={require('./assets/marcelo.jpeg')} style={styles.img} />
        <View style={styles.grupo}>
          <Text style={styles.titulo}>Dados Pessoais:</Text>
          <Text>Nome: {nome}</Text>
          <Text>Email: {email}</Text>
          <Text>Data Nascimento: {dtNascimento}</Text>
        </View>
        <View style={styles.grupo}>
          <Text style={styles.titulo}>Formação:</Text>
          <Text>Ensino Superior - {facu}</Text>
          <Text>Cursando {ciclo}º ciclo de {curso}</Text>
        </View>
        <View style={styles.grupo}>
          <Text style={styles.titulo}>Projetos:</Text>
          <Text>Disponíveis no GitHub:</Text>
          <Text style={styles.link} onPress={() => Linking.openURL('https://github.com/MarceloDCastro')}>{git}</Text>
        </View>
			</View>
		)
	}
}
const styles={
  container:{
    padding:15
  },
  img:{
    width: 300,
    height: 300,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10
  },
  grupo:{
    marginTop: 10
  },
  titulo:{
    fontSize: 25
  },
  link:{
    color: '#00F'
  }
}

export default App;
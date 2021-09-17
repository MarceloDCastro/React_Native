import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable} from 'react-native';

class App extends Component{
	constructor(props){
		super(props);
		this.state= {
			numero: 0
		};
		
		this.aumentar = this.aumentar.bind(this);
		this.diminuir = this.diminuir.bind(this);
	}
	
	aumentar(){
		this.setState({ numero: this.state.numero + 1 });
	}
	
	diminuir(){
    if(this.state.numero > 0){
      this.setState({ numero: this.state.numero - 1 });
    }
	}
	
	render(){
		return(
			<View>

        <Text style={styles.titulo}>Contador de Pessoas</Text>
			  <Text style={styles.numero}> {this.state.numero} </Text>
			
				<View>
          <Pressable style={styles.botaoMais} onPress={this.aumentar}>
            <Text style={styles.botaoTxt}>+</Text>
          </Pressable>
					<Pressable style={styles.botaoMenos} onPress={this.diminuir}>
            <Text style={styles.botaoTxt}>-</Text>
          </Pressable>
				</View>
			</View>
		);
	}

}

const styles = StyleSheet.create({
  titulo:{
    fontSize: 30,
    textAlign: "center",
    marginTop: 40
  },
	numero:{
		fontSize: 25,
		color: 'green',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
		marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 30,
    width: '50%',
    textAlign: "center"
	},
  botaoMais:{
    borderWidth: 1,
    width: '50%',
    padding: 2,
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: "center",
    backgroundColor: '#90EE90',
    marginBottom: 10
  },
  botaoMenos:{
    borderWidth: 1,
    width: '50%',
    padding: 2,
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: "center",
    backgroundColor: '#FF6961'
  },
  botaoTxt:{
    fontSize: 20
  }
})

export default App;
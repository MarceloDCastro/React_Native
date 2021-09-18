import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList} from 'react-native';
import Vaga from './Vaga/index';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      produtos:[
        {id: 1, nome: "Desenvolvedor Back-End", salario: "3000,00", descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet felis elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet felis elit.", contato:"empresa1@gmail.com"},
        {id: 2, nome: "Desenvolvedor Front-End", salario: "2900,00", descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet felis elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet felis elit.", contato:"empresa2@gmail.com"},
        {id: 3, nome: "Engenheiro de Dados", salario: "3200,00", descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet felis elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet felis elit.", contato:"empresa3@gmail.com"},
        {id: 4, nome: "Desenvolvedor Back-End", salario: "3000,00", descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet felis elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet felis elit.", contato:"empresa1@gmail.com"},
        {id: 5, nome: "Desenvolvedor Front-End", salario: "2900,00", descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet felis elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet felis elit.", contato:"empresa2@gmail.com"},
        {id: 6, nome: "Engenheiro de Dados", salario: "3200,00", descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet felis elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet felis elit.", contato:"empresa3@gmail.com"}
      ]
    }
    
  }

  render(){
    return (
    <View>
      <View style={styles.header}>
        <Text style={styles.titulo}>Vagas</Text>
      </View>
        <FlatList
          data={this.state.produtos}
          keyExtractor={(item) => item.id}
          renderItem={ ({item}) => <Vaga data={item}/>}
        />

    </View>
  );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#2ecc71",
    padding: 8
  },
  titulo: {
    fontSize: 30,
    marginTop: 20,
    textAlign: "center"
  },
});

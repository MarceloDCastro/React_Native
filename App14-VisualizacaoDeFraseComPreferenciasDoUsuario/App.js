import React, { Component } from 'react';
import { Text, View, StyleSheet, Switch, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      lightMode: true,
      smallFont: true
    }
  }

   async componentDidMount(){
    await AsyncStorage.getItem('lightMode').then((valor)=> {
      this.setState({lightMode: JSON.parse(valor)});
    })
    await AsyncStorage.getItem('smallFont').then((valor)=> {
      this.setState({smallFont: JSON.parse(valor)});
    })
  }

  async componentDidUpdate(_, prevState){
    const lightMode = this.state.lightMode;
    const smallFont = this.state.smallFont;
    //if(prevState !== lightMode){
      await AsyncStorage.setItem('lightMode', JSON.stringify(lightMode));
    //}
    //if(prevState !== smallFont){
      await AsyncStorage.setItem('smallFont', JSON.stringify(smallFont));
    //}
  }

  render(){
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.titulo}>Frases</Text>
          <View style={styles.groups}>
            <View style={styles.group}>
            <Text style={styles.opt}>Dia</Text>
            <Switch value={this.state.lightMode} onValueChange={(valor) => { this.setState({ lightMode: valor }) }} />
            </View>
            <View style={styles.group}>
            <Text style={styles.opt}>Pequeno</Text>
            <Switch value={this.state.smallFont} onValueChange={(valor) => { this.setState({ smallFont: valor }) }} />
            </View>
          </View>
          <View style={{backgroundColor: (this.state.lightMode ? "white" : "black"),borderWidth: 1, marginTop: 15}}>
            <Text style={{fontSize: (this.state.smallFont ? 14 : 20), color: (this.state.lightMode ? "black" : "white"), margin: 5}}>  Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. In elementis mé pra quem é amistosis quis leo. Si num tem leite então bota uma pinga aí cumpadi!</Text>
            <Text style={{fontSize: (this.state.smallFont ? 14 : 20), color: (this.state.lightMode ? "black" : "white"), margin: 5}}>  Delegadis gente finis, bibendum egestas augue arcu ut est. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Mais vale um bebadis conhecidiss, que um alcoolatra  anonimis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.</Text>
            <Text style={{fontSize: (this.state.smallFont ? 14 : 20), color: (this.state.lightMode ? "black" : "white"), margin: 5}}>  Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Cevadis im ampola pa arma uma pindureta. Suco de cevadiss deixa as pessoas mais interessantis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  titulo: {
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  groups:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  group:{
    display: "flex",
    flexDirection: "row"
  },
  opt:{
    fontSize: 20,
  }
});

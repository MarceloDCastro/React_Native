import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Pressable, Picker, Slider, Switch, ScrollView, Alert } from 'react-native';
import { styles } from '../style';
import { useNavigation } from '@react-navigation/native';

export default function Formulario(){
const navigation = useNavigation();

const [nome, setNome] = useState('');
const [idade, setIdade] = useState('');
const [sexo, setSexo] = useState('Masculino');
const [escolaridade, setEscolaridade] = useState('Ensino Fundamental');
const [limite, setLimite] = useState(200);
const [brasileiro, setBrasileiro] = useState(0);

  function confirmar(){
    if(nome == "" || idade == ""){
      Alert.alert(
      "Preencha todos os campos!",
      "Existem campos não preenchidos."
      )
    } else{
      navigation.navigate('Resposta', { nome, idade, sexo, escolaridade, limite, brasileiro });
    }
  } 

    return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.grupo}>
          <Text style={styles.str}>Nome:</Text>
          <TextInput style={styles.input} onChangeText={ (txt) => setNome(txt) }></TextInput>
        </View>

        <View style={styles.grupo}>
          <Text style={styles.str}>Idade:</Text>
          <TextInput style={styles.input} keyboardType='numeric' onChangeText={ (txt) => setIdade(txt)}></TextInput>
        </View>

        <View style={styles.grupo}>
          <Text style={styles.str}>Sexo:</Text>
          <Picker style={{width: 140}} selectedValue={sexo} onValueChange={(valor) => setSexo(valor) }>
            <Picker.item key={1} value={'Masculino'} label="Masculino" />
            <Picker.item key={2} value={'Feminino'} label="Feminino" />
            <Picker.item key={3} value={'Outros'} label="Outros" />
          </Picker>
        </View>

        <View style={styles.grupo}>
          <Text style={styles.str}>Escolaridade:</Text>
          <Picker style={{width:210}} selectedValue={escolaridade} onValueChange={(valor) => setEscolaridade(valor) }>
            <Picker.item key={1} value={'Ensino Fundamental'} label="Ensino Fundamental" />
            <Picker.item key={2} value={'Ensino Médio'} label="Ensino Médio" />
            <Picker.item key={3} value={'Ensino Superior'} label="Ensino Superior" />
          </Picker>
        </View>

        <View style={styles.grupo}>
          <Text style={styles.str}>Limite:</Text>
          <Slider minimumValue={0} maximumValue={1000} step={1} value={limite} onValueChange={(valor) => setLimite(valor) } />
          <Text style={styles.limite}>{limite}</Text>
        </View>

        <View style={styles.grupo}>
          <Text style={styles.str}>Brasileiro:</Text>
          <Switch style={styles.switch} value={brasileiro} onValueChange={(valor) => setBrasileiro(valor)} />
        </View>

        <Pressable style={styles.botao} onPress={confirmar}>
          <Text style={styles.textoBotao}>Confirmar</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
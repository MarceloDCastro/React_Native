import React from 'react';
import { View, Text, Image} from 'react-native';
import { styles } from '../style';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <Image source={{uri: 'https://avatars.githubusercontent.com/u/73323018?v=4'}} style={{width: 250, height: 250, borderRadius: 10, marginVertical: 20}} />
      <View>
        <Text style={styles.dados}>Nome: Marcelo de Castro Marieto Silva</Text>
        <Text style={styles.dados}>Email: marcelodecastro.ms@gmail.com</Text>
        <Text style={styles.dados}>Data de Nascimento: 24/09/2001</Text>
        <Text style={styles.dados}>GitHub: https://github.com/MarceloDCastro/</Text>
      </View>
    </View>
  );
}
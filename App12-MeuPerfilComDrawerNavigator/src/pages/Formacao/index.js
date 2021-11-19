import React from 'react';
import { View, Text} from 'react-native';
import { styles } from '../style';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}>Ensino Superior</Text>
        <Text style={styles.dados}>FATEC Rubens Lara</Text>
        <Text style={styles.dados}>Curso: Sistemas para Internet</Text>
        <Text style={styles.dados}>Conclusão: 06/2022</Text>
      </View>
    </View>
  );
}
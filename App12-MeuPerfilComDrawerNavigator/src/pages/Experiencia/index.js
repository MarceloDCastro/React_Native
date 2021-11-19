import React from 'react';
import { View, Text} from 'react-native';
import { styles } from '../style';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}></Text>
      </View>
    </View>
  );
}
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Home() {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Tela inicial</Text>
      <Button
        title="Ir para sobre"
        onPress={() => nav.navigate('Sobre')} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Sobre() {

  return (
    <View style={styles.container}>
      <Text>Página sobre</Text>
      <FontAwesome
        name="youtube"
        size={30}
        color="#f00"
        style={{ marginRight: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
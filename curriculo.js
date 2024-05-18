import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Curriculo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Meu Currículo</Text>
      <Text style={styles.text}>Aqui estão os detalhes do seu currículo...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
  },
});

export default Curriculo;

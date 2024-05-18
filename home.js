import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Seu Nome</Text>
      <Image source={{ uri: 'URL_DA_SUA_IMAGEM' }} style={styles.image} />
      <Button
        title="Ver Currículo"
        onPress={() => navigation.navigate('Curriculo')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 20,
  },
});

export default Home;

import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DetailsScreen = () => {
  const navigation = useNavigation(); // Este hook sirve para la navegación 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      
      {/* Botón con opacidad, es decir, sin contenedor alguno */}
      <TouchableOpacity 
        onPress={() => navigation.navigate('Info')} 
      >
        <Text style={styles.textButton}>Go to next page</Text>
      </TouchableOpacity>

      {/* Botón que no es tan grande */}
      <View style={styles.smallButtonContainer}>
        <Button
          title="Go back"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 40,
  },
  textButton: {
    fontSize: 18,
    color: 'black', // El color es el mismo que el del título
    textDecorationLine: 'none', // No se define un subrayado
    marginBottom: 20, // Espacio entre botón
  },
  smallButtonContainer: {
    width: '40%', // Porcentaje definido para que el botón sea más pequeño y centrado
    marginVertical: 10, // Espacio vertical para los botones
  }
});

export default DetailsScreen;

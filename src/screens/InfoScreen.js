import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const InfoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Information Screen</Text>

      <View style={styles.smallButtonContainer}>
        <Button title="Go back" onPress={() => navigation.navigate('Details')} />
      </View>

      <TouchableOpacity onPress={() => navigation.popToTop()}>
        <Text style={styles.textButton}>Go to Home</Text>
      </TouchableOpacity>
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
    color: 'black',
    marginTop: 20,
  },
  smallButtonContainer: {
    width: '40%',
    marginVertical: 10,
  },
});

export default InfoScreen;
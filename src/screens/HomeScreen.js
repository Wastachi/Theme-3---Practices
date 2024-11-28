import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text style={styles.textButton}>Go to Details</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Info')}>
        <Text style={styles.textButton}>Go to Info</Text>
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
    color: 'black',
    marginBottom: 40,
  },
  textButton: {
    fontSize: 18,
    color: 'black',
    marginBottom: 20,
  },
});

export default HomeScreen;
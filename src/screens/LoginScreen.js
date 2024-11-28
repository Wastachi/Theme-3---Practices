import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useColorMode } from 'native-base';

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { colorMode } = useColorMode();

  const handleLogin = () => {
    navigation.replace('Home');
  };

  const handleRegister = () => {
    navigation.navigate('Registro');
  };

  const backgroundColor = colorMode === 'light' ? '#e6f2ff' : '#1a202c';
  const textColor = colorMode === 'light' ? '#3a5a9f' : '#ffffff';
  const inputBackgroundColor = colorMode === 'light' ? '#ffffff' : '#2d3748';
  const inputBorderColor = colorMode === 'light' ? '#bdd1e6' : '#ffffff';
  const placeholderColor = colorMode === 'light' ? '#6a8caf' : '#ffffff';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.header, { color: textColor }]}>VeciApp</Text>
      <Text style={[styles.title, { color: textColor }]}>Iniciar Sesión</Text>
      
      <TextInput
        style={[styles.input, { backgroundColor: inputBackgroundColor, borderColor: inputBorderColor }]}
        placeholder="Usuario"
        placeholderTextColor={placeholderColor}
        value={username}
        onChangeText={setUsername}
      />
      
      <TextInput
        style={[styles.input, { backgroundColor: inputBackgroundColor, borderColor: inputBorderColor }]}
        placeholder="Contraseña"
        placeholderTextColor={placeholderColor}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleRegister} style={styles.register}>
        <Text style={[styles.registerText, { color: textColor }]}>¿No tienes una cuenta? Regístrate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '90%',
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
    borderWidth: 1,
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#3a5a9f',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  register: {
    marginTop: 15,
  },
  registerText: {
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;

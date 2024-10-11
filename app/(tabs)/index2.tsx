import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemedView } from '@/components/ThemedView';

const ForgotPasswordScreen: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>('');

  const isValidEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async () => {
    if (!isValidEmail(email)) {
      Alert.alert('Erro', 'Por favor, insira um email válido');
      return;
    }

    try {
      const response = await fetch('http://seusite.com/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        Alert.alert('Sucesso', 'Confira seu e-mail para instruções de recuperação.');
      } else {
        const errorMessage = await response.text();
        Alert.alert('Erro', errorMessage);
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível enviar a solicitação.');
    }
  };

  return (
    <ThemedView style={styles.container}>
      <Image 
        source={require('@/assets/images/senai.png')} 
        style={styles.logo} 
      />
      <View style={[styles.redCircle, styles.redCircle1]} />
      <View style={[styles.redCircle, styles.redCircle2]} />
      <View style={[styles.redCircle, styles.redCircle3]} />
      <View style={[styles.redCircle, styles.redCircle4]} />

      <Text style={styles.titleText}></Text>
      <Text style={styles.titleText}></Text>
      
      <View style={styles.formContainer}>
        <Text style={styles.titleText}>Esqueceu a senha</Text>
        <Text style={styles.inputLabel}>Insira seu e-mail:</Text>
        <TextInput 
          placeholder="Digite seu e-mail" 
          style={styles.input} 
          keyboardType="email-address" 
          placeholderTextColor="black" 
          onChangeText={setEmail}
          value={email}
        />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ThemedView>
  );
};

// Estilos do componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
    backgroundColor: 'rgba(255, 0, 0, 0.8)',
  },
  formContainer: {
    padding: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 15,
    elevation: 5,
    width: '90%',
    maxWidth: 350,
    borderWidth: 1,
    borderColor: '#ff0000',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'black',
  },
  inputLabel: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#D32F2F',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: 'black',
    textAlign: 'center',
  },
  backButtonText: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 20,
    fontSize: 18,
  },
  buttonContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#D32F2F',
    marginTop: 2,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  redCircle: {
    position: 'absolute',
    backgroundColor: '#ff0303',
    opacity: 0.8,
  },
  redCircle1: {
    width: 250,
    height: 250,
    borderRadius: 200,
    top: 150,
    left: -60,
  },
  redCircle2: {
    width: 220,
    height: 220,
    borderRadius: 200,
    bottom: -25,
    left: 250,
  },
  redCircle3: {
    width: 150,
    height: 150,
    borderRadius: 200,
    top: 300,
    left: 60,
  },
  redCircle4: {
    width: 150,
    height: 150,
    borderRadius: 200,
    bottom: 105,
    left: 200,
  },
});

export default ForgotPasswordScreen;

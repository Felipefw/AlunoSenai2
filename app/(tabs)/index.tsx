import React from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importar o hook de navegação
import { ThemedView } from '@/components/ThemedView';

export default function LoginScreen() {
  const navigation = useNavigation(); // Inicializar o hook

  return (
    <ThemedView style={styles.container}>
      {/* Imagem do SESI no topo */}
      <Image 
        source={require('@/assets/images/SesiFot.png')} // Atualize para o nome correto do arquivo
        style={styles.logo} 
      />
      
      <Text style={styles.forgotPassword}></Text>
   
      {/* Bolas decorativas no fundo */}
      <View style={[styles.redCircle, styles.redCircle1]} />
      <View style={[styles.redCircle, styles.redCircle2]} />
      <View style={[styles.redCircle, styles.redCircle4]} />
      <View style={[styles.redCircle, styles.redCircle3]} />

      {/* Contêiner do formulário de login com fundo transparente */}
      <View style={styles.formContainer}>
        <Text style={styles.loginText}>LOGIN</Text>
        
        <Text style={styles.forgotPassword}>E-mail:</Text>
        <TextInput 
          placeholder="" 
          style={styles.input} 
          keyboardType="email-address" 
          placeholderTextColor="black" 
        />

        <Text style={styles.forgotPassword}>Senha</Text>
        <TextInput 
          placeholder="" 
          style={styles.input} 
          secureTextEntry 
          placeholderTextColor="black" 
        />

        {/* Quando o usuário clicar em "Esqueceu a senha", navegue para "Index2" */}
        <TouchableOpacity onPress={() => navigation.navigate('index2.tx')}>
          <Text style={styles.forgotPassword}>Esqueceu a senha</Text>
        </TouchableOpacity>

        {/* Substituindo o Button por TouchableOpacity */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => alert('Login efetuado')}>
            <Text style={styles.buttonText}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ThemedView>
  );
}

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
  },
  formContainer: {
    padding: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 15,
    elevation: 5,
    width: '90%',
    maxWidth: 350,
    borderWidth: 1,
    borderColor: '#D32F2F',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'black',
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
  forgotPassword: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 20,
    fontSize: 20,
  },
  buttonContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#D32F2F',
    marginTop: 20,
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
    backgroundColor: '#ff0000',
  },
  redCircle4: {
    width: 150,
    height: 150,
    borderRadius: 200,
    bottom: 105,
    left: 200,
    backgroundColor: '#ff0000',
  },
});

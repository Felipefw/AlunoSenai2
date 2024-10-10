import React, { useState } from 'react';
import { ScrollView, Image, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function HomeScreen() {  
  const [showInfo, setShowInfo] = useState(false); // Estado para controlar a visibilidade do texto

  const handleSobreNosPress = () => {
    setShowInfo(!showInfo); // Alterna a visibilidade do texto
  };

  return (
    <View style={styles.body}>
      {/* Header com logo do SENAI */}
      <View style={styles.headerStyle}>
        <Image source={require('@/assets/images/senai.png')} style={styles.headerImage}></Image>
      </View>

      {/* Botão AAPM */}
      <View style={styles.appmContainer}>
        <Text style={styles.appmText}>AAPM</Text>
      </View>

      {/* Botão Sobre Nós */}
      <View style={styles.sobreNosContainer}>
        <TouchableOpacity style={styles.sobreNosButton} onPress={handleSobreNosPress}>
          <Text style={styles.sobreNosButtonText}>Sobre Nós</Text>
        </TouchableOpacity>
      </View>

      {/* Texto informativo da AAPM, visível apenas quando showInfo é verdadeiro */}
      {showInfo && (
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            Na AAPM, nosso objetivo é proporcionar o melhor atendimento tanto para os alunos quanto para o público em geral. Estamos abertos em diferentes horários durante a semana:
          </Text>
          <Text style={styles.infoText}>
            - Segunda, Quarta e Sexta-feira: das 07:30 às 13:15 e das 14:45 às 17:00{'\n'}
            - Terça e Quinta-feira: das 10:30 às 13:15 e das 14:45 às 19:30
          </Text>
          <Text style={styles.infoText}>
            Oferecemos uma ampla gama de itens de papelaria e uniformes. Nossos associados têm acesso a diversos benefícios, incluindo o uso do videogame, da quadra, da internet e de um armário. Além disso, aqueles que pagam quatro semestres têm direito à formatura. Para quem não é associado, o uso da quadra requer reserva e o pagamento de uma taxa de 5 reais.
          </Text>
        </View>
      )}

      {/* Conteúdo principal */}
      <ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={false}>
        {/* Seção de Materiais com rolagem horizontal */}
        <View style={styles.containerline}>
          <View style={styles.line}></View>
          <Text style={styles.linetext}>Materiais</Text>
        </View>

        <ScrollView horizontal={true} style={styles.materialScroll} showsHorizontalScrollIndicator={false}>
          {/* Materiais existentes */}
          <View style={styles.materialBalloon}>
            <View style={styles.materialBalloonTitle}>
              <Text style={styles.materialBalloonTitleText}>Cola</Text>
            </View>
            <View style={styles.materialBalloonContent}>
              <Image source={require('@/assets/images/cola.png')} style={styles.materialImage} />
              <Text style={styles.materialPrice}>R$ 5,00</Text>
            </View>
          </View>
          <View style={styles.materialBalloon}>
            <View style={styles.materialBalloonTitle}>
              <Text style={styles.materialBalloonTitleText}>Apontador</Text>
            </View>
            <View style={styles.materialBalloonContent}>
              <Image source={require('@/assets/images/apontador.png')} style={styles.materialImage} />
              <Text style={styles.materialPrice}>R$ 2,00</Text>
            </View>
          </View>
        </ScrollView>

        {/* Seção de Uniformes com rolagem horizontal */}
        <View style={styles.containerline}>
          <View style={styles.line}></View>
          <Text style={styles.linetext}>Uniformes</Text>
        </View>

        <ScrollView horizontal={true} style={styles.uniformScroll} showsHorizontalScrollIndicator={false}>
          {/* Uniformes existentes */}
          <View style={styles.uniformBalloon}>
            <View style={styles.uniformBalloonTitle}>
              <Text style={styles.uniformBalloonTitleText}>Jaleco</Text>
            </View>
            <View style={styles.uniformBalloonContent}>
              <Image source={require('@/assets/images/jaleco.png')} style={styles.uniformImage} />
              <Text style={styles.uniformPrice}>R$ 40,00</Text>
            </View>
          </View>
          <View style={styles.uniformBalloon}>
            <View style={styles.uniformBalloonTitle}>
              <Text style={styles.uniformBalloonTitleText}>Camiseta Senai Branca</Text>
            </View>
            <View style={styles.uniformBalloonContent}>
              <Image source={require('@/assets/images/camisa2.png')} style={styles.uniformImage} />
              <Text style={styles.uniformPrice}>R$ 45,00</Text>
            </View>
          </View>
          <View style={styles.uniformBalloon}>
            <View style={styles.uniformBalloonTitle}>
              <Text style={styles.uniformBalloonTitleText}>Camiseta Senai Azul</Text>
            </View>
            <View style={styles.uniformBalloonContent}>
              <Image source={require('@/assets/images/camisa1.png')} style={styles.uniformImage} />
              <Text style={styles.uniformPrice}>R$ 60,00</Text>
            </View>
          </View>
          <View style={styles.uniformBalloon}>
            <View style={styles.uniformBalloonTitle}>
              <Text style={styles.uniformBalloonTitleText}>Bota de proteção</Text>
            </View>
            <View style={styles.uniformBalloonContent}>
              <Image source={require('@/assets/images/bota.png')} style={styles.uniformImage} />
              <Text style={styles.uniformPrice}>R$ 60,00</Text>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );    
}

const styles = StyleSheet.create({
  body: {
    height: '100%',
    backgroundColor: '#ffffff',
  },
  ScrollView: {
    marginTop: -5,
  },
  headerImage: {
    height: 90,
    width: '80%',
    top: 40,
    position: 'absolute',
  },
  headerStyle: {
    position: 'static',
    top: 0,
    marginBottom: 70,
    alignItems: 'center',
    height: '25%',
    backgroundColor: '#ED1F24',
  },
  appmContainer: {
    marginTop: -30,
    display: 'flex',
    alignItems: 'center',
  },
  appmText: {
    color: '#D32F2F',
    fontSize: 24,
    fontWeight: 'bold',
  },
  sobreNosContainer: {
    display: 'flex',
    alignItems: 'center',
    marginVertical: 10,
  },
  sobreNosButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D32F2F',
    elevation: 3,
  },
  sobreNosButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoContainer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    elevation: 2,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  containerline: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  line: {
    backgroundColor: '#F20F0F',
    width: '100%',
    marginTop: 6,
    height: 2,
  },
  linetext: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#ffffff',
    position: 'relative',
    top: -12,
    fontSize: 20,
    fontWeight: '600',
  },
  materialScroll: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15,
    height: 170,
  },
  materialBalloon: {
    width: 150,
    height: 160,
    marginLeft: 15,
  },
  materialBalloonTitle: {
    height: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    display: 'flex',
    justifyContent: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 5,
  },
  materialBalloonTitleText: {
    fontSize: 13,
  },
  materialBalloonContent: {
    height: '100%',
    padding: 5,
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'space-around',
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 3,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  materialImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  materialPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D32F2F',
    textAlign: 'center',
  },
  uniformScroll: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15,
    height: 170,
  },
  uniformBalloon: {
    width: 150,
    height: 160,
    marginLeft: 15,
  },
  uniformBalloonTitle: {
    height: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    display: 'flex',
    justifyContent: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 5,
  },
  uniformBalloonTitleText: {
    fontSize: 13,
  },
  uniformBalloonContent: {
    height: '100%',
    padding: 5,
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'space-around',
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 3,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  uniformImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  uniformPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D32F2F',
    textAlign: 'center',
  },
});

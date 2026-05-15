import React from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import styles from '../styles/styles';

export default function PerfilScreen({ navigation }) {

  const [user] = React.useState({
    nome: 'Dr_calvisse_aguda',
    email: 'calvisseaguda@email.com'
  });

  const [feedback, setFeedback] = React.useState('');
  const [rating, setRating] = React.useState(0);

  const handleLogout = async () => {

    await AsyncStorage.removeItem('recentGames');

    navigation.replace('Login');
  };

  const handleSubmit = () => {

    console.log('Avaliação:', rating);
    console.log('Sugestão:', feedback);

    setFeedback('');
    setRating(0);

    alert('Obrigado pelo feedback!');
  };

  return (

    <View style={styles.container}>

      {/* PERFIL */}

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20
        }}
      >

        <Image
          source={require('../../assets/imagens/Perfil.webp')}
          style={styles.profileImage}
        />

        <View style={{ marginLeft: 15,marginTop: 30  }}>

          <Text style={styles.profileName}>
            {user.nome}
          </Text>

          <Text style={styles.profileEmail}>
            {user.email}
          </Text>

        </View>

      </View>

      {/* AVALIAÇÃO */}

      <Text style={styles.sectionTitle}>
        Avalie o app
      </Text>

      <View
        style={{
          flexDirection: 'row',
          marginBottom: 5
        }}
      >

        {[1,2,3,4,5].map((star) => (

          <TouchableOpacity
            key={star}
            onPress={() => setRating(star)}
          >

            <Ionicons
              name={
                star <= rating
                  ? 'star'
                  : 'star-outline'
              }
              size={30}
              color="#ffc800"
              style={{ marginRight: 5 }}
            />

          </TouchableOpacity>

        ))}

      </View>

      {/* SUGESTÕES */}

      <Text style={styles.sectionTitle}>
        Sugestões
      </Text>

      <TextInput
        value={feedback}
        onChangeText={setFeedback}
        placeholder="Digite sua sugestão..."
        placeholderTextColor="#072938"

        style={{
          backgroundColor: '#79a9ab',
          marginTop: 0,
          paddingVertical: 20,
          paddingHorizontal: 20,
          borderRadius: 25,
          color: 'white'
        }}

        multiline
      />

      {/* BOTÃO FEEDBACK */}

      <TouchableOpacity

        style={{
          backgroundColor: '#79a9ab',
          marginTop: 10,
          paddingVertical: 12,
          paddingHorizontal: 40,
          borderRadius: 25
        }}

        onPress={handleSubmit}
      >

        <Text style={styles.buttonText}>
          Enviar Feedback
        </Text>

      </TouchableOpacity>

      {/* BOTÃO SAIR */}

      <TouchableOpacity
        style={[
          styles.logoutButton,
          { marginTop: 10 }
        ]}
        onPress={handleLogout}
      >

        <Text style={styles.buttonText}>
          Sair
        </Text>

      </TouchableOpacity>

    </View>
  );
}
import React from 'react';

import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  Linking
} from 'react-native';

import styles from '../styles/styles';
import { games } from '../data/games';

export default function PesquisarScreen() {

  const [search, setSearch] =
    React.useState('');

  const filteredGames = games.filter(
    game =>
      game.title
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (

    <View style={styles.container}>

      <TextInput
        placeholder="Pesquisar jogo..."
        value={search}
        onChangeText={setSearch}
        style={styles.input}
        placeholderTextColor="#c7c7c7"
      />

      <FlatList

        data={filteredGames}

        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (

          <TouchableOpacity

            style={{
              flexDirection: 'row',
              marginBottom: 15,
              alignItems: 'center'
            }}

            onPress={() =>
              Linking.openURL(item.link)
            }
          >

            <Image
              source={item.image}
              style={{
                width: 50,
                height: 50,
                borderRadius: 8,
                marginRight: 10
              }}
            />

            <Text style={{ color: 'white' }}>
              {item.title}
            </Text>

          </TouchableOpacity>

        )}
      />

    </View>
  );
}
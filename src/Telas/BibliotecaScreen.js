import React from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Linking
} from 'react-native';

import styles from '../styles/styles';
import { games } from '../data/games';

export default function BibliotecaScreen() {

  return (

    <View style={styles.container}>

      <Text style={styles.sectionTitle}>
        Suas Wikis
      </Text>

      <FlatList

        data={games}

        numColumns={3}

        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (

          <View style={styles.gridItem}>

            <TouchableOpacity

              onPress={async () => {

                try {

                  const stored =
                    await AsyncStorage.getItem(
                      'recentGames'
                    );

                  let recent = stored
                    ? JSON.parse(stored)
                    : [];

                  // remove duplicado
                  recent = recent.filter(
                    g => g.id !== item.id
                  );

                  // adiciona no topo
                  recent.unshift(item);

                  // limita em 5
                  recent = recent.slice(0, 5);

                  await AsyncStorage.setItem(
                    'recentGames',
                    JSON.stringify(recent)
                  );

                  // abre a wiki
                  if (item.link) {
                    Linking.openURL(item.link);
                  }

                } catch (e) {
                  console.log(e);
                }

              }}
            >

              <Image
                source={item.image}
                style={styles.placeholderImgSquare}
              />

            </TouchableOpacity>

            <Text style={styles.gameTitleSmall}>
              {item.title}
            </Text>

          </View>

        )}
      />

    </View>
  );
}
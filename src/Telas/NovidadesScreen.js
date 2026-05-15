import React from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';

import styles from '../styles/styles';
import Colors from '../styles/Colors';

export default function NovidadesScreen() {

  const games = [

    {
      id: '1',
      title: 'Outer Wilds',
      image: require('../../assets/imagens/outerwilds.webp'),
      link: 'https://outerwilds.fandom.com/wiki/Outer_Wilds_Wiki',
      isNew: true
    },

    {
      id: '2',
      title: 'Horizon: Zero Dawn',
      image: require('../../assets/imagens/horizon.webp'),
      link: 'https://horizon.fandom.com/wiki/Horizon_Zero_Dawn',
      isNew: true
    },

    {
      id: '3',
      title: 'Hades',
      image: require('../../assets/imagens/hades.webp'),
      link: 'https://hades.fandom.com/wiki/Hades_Wiki',
      isNew: true
    }

  ];

  const newGames = games.filter(
    game => game.isNew
  );

  return (

    <View style={styles.container}>

      <Text style={styles.sectionTitle}>
        Novas Wikis
      </Text>

      <FlatList

        data={newGames}

        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (

          <TouchableOpacity

            style={{
              flexDirection: 'row',
              marginBottom: 15,
              alignItems: 'center'
            }}

            onPress={async () => {

              try {

                const stored =
                  await AsyncStorage.getItem(
                    'recentGames'
                  );

                let recent = stored
                  ? JSON.parse(stored)
                  : [];

                recent = recent.filter(
                  g => g.id !== item.id
                );

                recent.unshift(item);

                recent = recent.slice(0, 5);

                await AsyncStorage.setItem(
                  'recentGames',
                  JSON.stringify(recent)
                );

                Linking.openURL(item.link);

              } catch (e) {
                console.log(e);
              }

            }}
          >

            <Image
              source={item.image}
              style={{
                width: 60,
                height: 60,
                borderRadius: 10,
                marginRight: 10
              }}
            />

            <View>

              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold'
                }}
              >
                {item.title}
              </Text>

              <Text
                style={{
                  color: Colors.accent,
                  fontSize: 12
                }}
              >
                NOVO
              </Text>

            </View>

          </TouchableOpacity>

        )}
      />

    </View>
  );
}
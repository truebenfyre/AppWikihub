import React from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  View,
  Text,
  FlatList,
  Image
} from 'react-native';

import styles from '../styles/styles';

export default function RecentesScreen() {

  const [recentGames, setRecentGames] =
    React.useState([]);

  React.useEffect(() => {
    loadRecent();
  }, []);

  const loadRecent = async () => {

    const stored =
      await AsyncStorage.getItem(
        'recentGames'
      );

    if (stored) {
      setRecentGames(JSON.parse(stored));
    }
  };

  return (

    <View style={styles.container}>

      <Text style={styles.sectionTitle}>
        Acessados recentemente
      </Text>

      <FlatList

        data={recentGames}

        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (

          <View style={{ marginBottom: 15 }}>

            <Image
              source={item.image}
              style={{
                width: 80,
                height: 150,
                borderRadius: 10
              }}
            />

            <Text
              style={{
                color: 'white',
                marginTop: 5
              }}
            >
              {item.title}
            </Text>

          </View>

        )}
      />

    </View>
  );
}
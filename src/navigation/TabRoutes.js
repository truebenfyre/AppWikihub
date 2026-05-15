// Cole aqui seu código das Tabs
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import BibliotecaScreen from '../Telas/BibliotecaScreen';
import RecentesScreen from '../Telas/RecentesScreen';
import PesquisarScreen from '../Telas/PesquisarScreen';
import NovidadesScreen from '../Telas/NovidadesScreen';
import PerfilScreen from '../Telas/PerfilScreen';

const Tab = createBottomTabNavigator();

export default function MainTabs() {

  return (

    <Tab.Navigator

      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: '#1b1c2d',
          borderTopWidth: 0
        },

        tabBarActiveTintColor: '#ffc800',
      }}
    >

      <Tab.Screen
        name="Biblioteca"
        component={BibliotecaScreen}

        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="book"
              size={24}
              color={color}
            />
          )
        }}
      />

      <Tab.Screen
        name="Recentes"
        component={RecentesScreen}

        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="game-controller"
              size={24}
              color={color}
            />
          )
        }}
      />

      <Tab.Screen
        name="Pesquisar"
        component={PesquisarScreen}

        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="search"
              size={24}
              color={color}
            />
          )
        }}
      />

      <Tab.Screen
        name="Novidades"
        component={NovidadesScreen}

        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="alert"
              size={24}
              color={color}
            />
          )
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}

        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="person"
              size={24}
              color={color}
            />
          )
        }}
      />

    </Tab.Navigator>
  );
}
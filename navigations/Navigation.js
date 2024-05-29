// AppNavigation.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BirdDetailScreen from '../screens/BirdDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import BirdListScreen from '../screens/BirdListScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BirdStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BirdList" component={BirdListScreen} options={{ title: 'Aves Chilenas' }} />
      <Stack.Screen name="BirdDetail" component={BirdDetailScreen} options={{ title: 'Detalle del Ave' }} />
    </Stack.Navigator>
  );
}

function FavoritesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={FavoritesScreen} options={{ title: 'Favoritos' }} />
      <Stack.Screen name="BirdDetail" component={BirdDetailScreen} options={{ title: 'Detalle del Ave' }} />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === 'Aves') {
        iconName = focused ? 'star' : 'star-outline';
      } else if (route.name === 'Favoritos') {
        iconName = focused ? 'heart' : 'heart-outline';
      }

      return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: { display: 'flex' },
  });

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Aves"
          component={BirdStack}
          options={{ title: 'Aves',headerShown: false }}
     
        />
        <Tab.Screen
          name="Favoritos"
          component={FavoritesStack}
          options={{ title: 'Favoritos',headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

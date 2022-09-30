import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';
import HomeScreen from '../screens/HomeScreen';
import PokemonScreen from '../screens/PokemonScreen';

const Stack = createStackNavigator<RootStackParams>();

export type RootStackParams = {
  HomeScreen: undefined;
  PokemonScreen: {
    simplePokemon: SimplePokemon;
    color: string;
  };
};

const NavigationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
    </Stack.Navigator>
  );
};

export default NavigationStack;

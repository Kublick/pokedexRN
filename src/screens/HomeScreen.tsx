/* eslint-disable react-native/no-inline-styles */
import {Image, FlatList, ActivityIndicator, Text, View} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import PokemonCard from '../components/PokemonCard';

const HomeScreen = () => {
  const {simplePokemonList, loadPokemons} = usePokemonPaginated();

  const {top} = useSafeAreaInsets();

  return (
    <>
      <Text>Hello World</Text>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />

      <View>
        <FlatList
          ListHeaderComponent={
            <Text
              style={{
                ...styles.title,
                ...styles.globalMargin,
                marginBottom: top + 20,
                top: 20,
              }}>
              Pokedex
            </Text>
          }
          data={simplePokemonList}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          keyExtractor={pokemon => pokemon.id}
          renderItem={({item}) => <PokemonCard pokemon={item} />}
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={
            <ActivityIndicator style={{height: 100}} size={20} color="grey" />
          }
        />
      </View>
    </>
  );
};

export default HomeScreen;

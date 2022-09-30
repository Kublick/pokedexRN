import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {PokemonFull} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';

interface Props {
  pokemon: PokemonFull;
}

const PokemonDetails = ({pokemon}: Props) => {
  return (
    <ScrollView
      style={{...StyleSheet.absoluteFillObject}}
      showsVerticalScrollIndicator={false}>
      <View style={{...styles.container, marginTop: 370}}>
        <Text style={styles.title}>Types</Text>
        <View>
          <Text>
            {pokemon.types.map(({type}) => (
              <Text key={type.name} style={styles.regularText}>
                {type.name}
              </Text>
            ))}
          </Text>
        </View>
      </View>
      <View style={{...styles.container}}>
        <Text style={styles.title}>Peso</Text>
        <Text style={styles.regularText}>{pokemon.weight} Kg</Text>
      </View>
      <View style={{...styles.container}}>
        <Text style={styles.title}>Sprites</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={styles.basicSprite}
        />
      </ScrollView>
      <View style={{...styles.container}}>
        <Text style={styles.title}>Habidades Base</Text>

        <Text>
          {pokemon.abilities.map(({ability}) => (
            <Text key={ability.name} style={styles.regularText}>
              {ability.name}{' '}
            </Text>
          ))}
        </Text>
      </View>
      <View style={{...styles.container}}>
        <Text style={styles.title}>Movimientos</Text>
        <View style={{flexDirection: 'column'}}>
          <Text>
            {pokemon.moves.map(({move}) => (
              <Text key={move.name} style={{...styles.regularText}}>
                {move.name}{' '}
              </Text>
            ))}
          </Text>
        </View>
      </View>
      <View style={{...styles.container, flexDirection: 'column'}}>
        <Text style={styles.title}>Stats</Text>
        <View>
          <Text>
            {pokemon.stats.map((stat, i) => (
              <View key={stat.stat.name + i} style={{flexDirection: 'row'}}>
                <Text key={stat.stat.name} style={{...styles.regularText}}>
                  {stat.stat.name} {'\n'}
                </Text>
                <Text style={{...styles.regularText, fontWeight: 'bold'}}>
                  {stat.base_stat}{' '}
                </Text>
              </View>
            ))}
          </Text>
        </View>
      </View>
      <View
        style={{
          marginBottom: 20,
          alignItems: 'center',
        }}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.basicSprite}
        />
      </View>
    </ScrollView>
  );
};

export default PokemonDetails;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  regularText: {
    fontSize: 17,
  },
  basicSprite: {
    width: 100,
    height: 100,
  },
});


import { StyleSheet, View, SafeAreaView, Platform, ScrollView } from 'react-native';
import PokemonCard from './components/PokemonCard';


export default function App() {


  const charmanderData = {
    name: "Charmander",
    image: require('./assets/fire.png'),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"]
  }
  const pikachuData = {
    name: "Pikachu",
    image: require('./assets/pikachu.png'),
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"]
  }

  const squirtleData = {
    name: "Squirtle",
    image: require('./assets/water.png'),
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric","Grass"]
  }
  const bulbasaurData = {
    name: "Bulbasaur",
    image: require('./assets/earth.png'),
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Growl", "Vine Whip", "Leech Seed"],
    weaknesses: ["Fire","Ice","Flying","Psychic"]
  }





  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <PokemonCard {...charmanderData} />
        <PokemonCard {...pikachuData} />
        <PokemonCard {...squirtleData} />
        <PokemonCard {...bulbasaurData} />
      </SafeAreaView>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? 50 : 0
  },
});

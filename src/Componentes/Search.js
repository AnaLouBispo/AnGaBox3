import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Biblioteca de ícones

export default function Search() {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#ccc" style={styles.iconSearch} />
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="#ccc"
      />
      <Ionicons name="options" size={20} color="#ccc" style={styles.iconFilter} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Cor do fundo do campo de busca
    borderRadius: 20,           // Bordas arredondadas
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  iconSearch: {
    marginRight: 5,
  },
  iconFilter: {
    marginLeft: 10,
  },
});

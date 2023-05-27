import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TabButtons = ({ activeScreen, handleTabChange }) => {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        style={[styles.tabButton, activeScreen === 'morning' && styles.activeTabButton]}
        onPress={() => handleTabChange('morning')}
      >
        <Text style={[styles.tabButtonText, activeScreen === 'morning' && styles.activeTabButtonText]}>
          Gündüz
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tabButton, activeScreen === 'night' && styles.activeTabButton]}
        onPress={() => handleTabChange('night')}
      >
        <Text style={[styles.tabButtonText, activeScreen === 'night' && styles.activeTabButtonText]}>Akşam</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabButtons;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d2fbd0',

  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  activeTabButton: {

    backgroundColor: 'white',
  },
  tabButtonText: {
    fontSize: 18,
    color: 'black',
  },
  activeTabButtonText: {
    fontWeight: 'bold',
    color: 'black',
    textDecorationLine:'underline',
  },
});

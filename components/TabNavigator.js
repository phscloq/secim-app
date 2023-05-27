import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VoteCount from './VoteCount';
import ParentComponent from './ParentComponent';

// Create a Tab Navigator
const Tab = createBottomTabNavigator();

const HomeScreen = () => (
  <View style={styles.container}>
   
    <VoteCount />
  </View>
);
const TabNavigator = () => (
  <Tab.Navigator
  screenOptions={{
    headerStyle: {
      backgroundColor: '#d2fbd0', // Change the background color of the header
    },
    tabBarStyle: {
      backgroundColor: '#d2fbd0', // Change the background color of the tab bar
      borderTopWidth: 0, // Remove the top border from all tabs
    },
    tabBarLabelStyle: {
      fontSize: 20, // Change the font size of the tab labels
      fontWeight: 'bold',
      color: '#0d5f07', // Change the font weight of the tab labels
    },
    tabBarInactiveTintColor: 'black',
    tabBarIndicatorStyle: {
      backgroundColor: '#d2fbd0', // Change the background color of the active tab's top border
      height: 2, // Adjust the height of the active tab's top border
    },
  }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Oy Sayım Ekranı', // Set a custom title for the header
        tabBarLabel: 'Oy Sayımı', // Set a custom label for the bottom tab
        tabBarIcon: ({ focused }) => (
          <View
            style={[
              styles.tabBarIcon,
              focused ? styles.tabBarIconActive : null,
            ]}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Gündüz Sayımları"
      component={ParentComponent}
      options={{
        title: 'SANDIK VERİLERİ', // Set a custom title for the header
        tabBarLabel: 'Sandık Verileri', // Set a custom label for the bottom tab
        tabBarIcon: ({ focused }) => (
          <View
            style={[
              styles.tabBarIcon,
              focused ? styles.tabBarIconActive : null,
            ]}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarIcon: {
    width: 150,
    height: 5,
    backgroundColor: 'white', // Change the color of the top border
  },
  tabBarIconActive: {
    backgroundColor: '#0d5f07', // Change the color of the top border for active tab
  },
});

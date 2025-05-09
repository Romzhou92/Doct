import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import { IconSymbol, IconSymbolName } from './ui/IconSymbol';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

export function TopMenu() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', icon: 'house.fill' as IconSymbolName, route: '/' },
    { name: 'Doléances', icon: '0.circle.fill' as IconSymbolName, route: '/doleances' },
    { name: 'Settings', icon: 'gearshape.fill' as IconSymbolName, route: '/settings' },
  ];

  return (
    <ThemedView style={styles.container}>
      <TouchableOpacity 
        style={styles.menuButton}
        onPress={() => setIsMenuOpen(!isMenuOpen)}
      >
        <IconSymbol name="line.horizontal.3" size={24} color="#000" />
      </TouchableOpacity>

      {isMenuOpen && (
        <ThemedView style={styles.menuDropdown}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => {
                router.push(item.route);
                setIsMenuOpen(false);
              }}
            >
              <IconSymbol name={item.icon} size={24} color="#000" />
              <ThemedText style={styles.menuText}>{item.name}</ThemedText>
            </TouchableOpacity>
          ))}
        </ThemedView>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  menuButton: {
    padding: 8,
  },
  menuDropdown: {
    position: 'absolute',
    top: 80,
    left: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  menuText: {
    marginLeft: 12,
    fontSize: 16,
  },
});
import { StyleSheet, Image, Platform, TextInput } from 'react-native';
import { useState } from 'react';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function DoleancesScreen() {
  const [textInput, setTextInput] = useState('');

  const handleTextChange = (text: string) => {
    setTextInput(text);
  };
  return (
    
    <ParallaxScrollView
          headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
          headerImage={
            <IconSymbol
              size={310}
              color="#808080"
              name="chevron.left.forwardslash.chevron.right"
              style={styles.headerImage}
            />
          }>
    <ThemedView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ThemedText type="title">Doleances</ThemedText>
    </ThemedView>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hello</ThemedText>
      </ThemedView>

      <ThemedView style={styles.container}>
        <ThemedText type="title">Doleances</ThemedText>
        
        
        <ThemedView style={styles.inputContainer}>
          <ThemedText type="subtitle">Your Message</ThemedText>
          <TextInput
            style={styles.input}
            value={textInput}
            onChangeText={handleTextChange}
            placeholder="Enter your message here"
            placeholderTextColor="#999"
            multiline={true}
            numberOfLines={4}
            autoComplete="off"
            enablesReturnKeyAutomatically
            keyboardType="default"
            returnKeyType="done"
          />
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

 
      const styles = StyleSheet.create({
        headerImage: {
          color: '#808080',
          bottom: -90,
          left: -35,
          position: 'absolute',
        },
        titleContainer: {
          flexDirection: 'row',
          gap: 8,
        },
        container: {
          flex: 1,
          padding: 16,
        },
        inputContainer: {
          marginTop: 20,
          width: '100%',
        },
        input: {
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          padding: 12,
          marginTop: 8,
          minHeight: 100,
          textAlignVertical: 'top',
          color: Platform.OS === 'ios' ? '#000' : '#333',
          backgroundColor: '#fff',
        },
})
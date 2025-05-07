import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import * as Speech from 'expo-speech';
import { IconSymbol } from './ui/IconSymbol';

interface VoiceInputProps {
  onVoiceResult: (text: string) => void;
  isListening: boolean;
  onListeningChange: (listening: boolean) => void;
}

export function VoiceInput({ onVoiceResult, isListening, onListeningChange }: VoiceInputProps) {
  const startVoiceRecognition = async () => {
    try {
      onListeningChange(true);
      
      const options = {
        language: 'fr-FR',
        onSpeechResults: (e: { value: string[] }) => {
          if (e.value?.[0]) {
            onVoiceResult(e.value[0]);
            onListeningChange(false);
          }
        },
        onSpeechEnd: () => {
          onListeningChange(false);
        }
      };

      await Speech.speak('Je vous écoute', options);
    } catch (error) {
      console.error('Voice recognition error:', error);
      onListeningChange(false);
    }
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.voiceButton,
        { opacity: pressed ? 0.8 : 1 }
      ]}
      onPress={startVoiceRecognition}
    >
      <IconSymbol 
        name={isListening ? "mic.fill" : "mic"} 
        size={24} 
        color="#000" 
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  voiceButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#A1CEDC',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  }
});
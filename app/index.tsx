import React, { useState } from 'react';
import { Button, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useTheme } from '@react-navigation/native';

export default function HomeScreen() {
  const router = useRouter();
  const { colors } = useTheme();
  const [inputValue, setInputValue] = useState('');

  const handleButtonPress = () => {
    if (!inputValue) {
      return;
    }
    router.push('/(tabs)');
  };

  return (
    <ThemedView className="flex-1 justify-center items-center">
      <ThemedText type="title" className="mb-4">
        LaPOS
      </ThemedText>

      <TextInput
        className="bg-gray-200 p-2 rounded-md mb-4 w-4/5"
        placeholder="nombre@lawallet.ar"
        value={inputValue}
        onChangeText={setInputValue}
      />

      <Button
        title="Aceptar"
        color={colors.primary}
        onPress={handleButtonPress}
      />
    </ThemedView>
  );
}

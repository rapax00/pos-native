import { Colors } from '@/constants/Colors';
import { Theme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function RootLayout() {
  const theme = useColorScheme();

  const themeValue: Theme = {
    dark: theme === 'dark',
    colors: {
      primary: Colors.brand.primary,
      background: Colors[theme!].background,
      card: Colors[theme!].tint,
      text: Colors[theme!].text,
      border: Colors[theme!].icon,
      notification: Colors[theme!].icon,
    },
  };

  return (
    <ThemeProvider value={themeValue}>
      <Stack screenOptions={{ headerTitle: '' }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView } from 'react-native';
import { Card } from '@/components/Card';
import { useTheme } from '@react-navigation/native';
import { useRouter } from 'expo-router';

export default function MenuScreen() {
  const { colors } = useTheme();
  const router = useRouter();

  const handlePress = (title: string) => {
    console.log(`Card pressed: ${title}`);
    switch (title) {
      case 'drinks':
        router.push('/submenus/drinks');
        break;
      case 'food':
        router.push('/submenus/food');
        break;
      case 'cash':
        router.push('/submenus/cash');
        break;
      case 'merch':
        router.push('/submenus/merch');
        break;
      case 'admin':
        router.push('/submenus/admin');
        break;
      case 'extract':
        router.push('/submenus/extract');
        break;
      default:
        break;
    }
  };

  return (
    <ThemedView className="flex-1">
      <ScrollView className="flex-1 p-4">
        <ThemedText
          type="title"
          className="text-center text-2xl font-bold mb-4"
        >
          Seleccioná un modo
        </ThemedText>
        <ThemedView className="flex-row flex-wrap justify-between">
          <Card
            title="Barra"
            icon="local-bar"
            color="mediumseagreen"
            width="full"
            onPress={() => handlePress('drinks')}
          />
          <Card
            title="Comida"
            icon="fastfood"
            color="dodgerblue"
            width="half"
            onPress={() => handlePress('food')}
          />
          <Card
            title="Merch"
            icon="shopping-cart"
            color="orange"
            width="half"
            onPress={() => handlePress('merch')}
          />
          <Card
            title="Caja"
            icon="point-of-sale"
            color="tomato"
            width="third"
            onPress={() => handlePress('cash')}
          />
          <Card
            title="Admin"
            icon="admin-panel-settings"
            color="tomato"
            width="third"
            onPress={() => handlePress('admin')}
          />
          <Card
            title="Extraer"
            icon="insert-drive-file"
            color="tomato"
            width="third"
            onPress={() => handlePress('extract')}
          />
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

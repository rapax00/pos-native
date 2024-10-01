import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView } from 'react-native';
import { CardRow } from '@/components/CardRow';
import { useCartContext } from '@/hooks/useCartContext';

export default function DrinksScreen() {
  const { addToCart } = useCartContext();

  const handleQuantityChange = (
    title: string,
    price: number,
    quantity: number
  ) => {
    addToCart({ title, price, quantity });
  };

  return (
    <ThemedView className="flex-1">
      <ScrollView className="flex-1 p-4">
        <ThemedText
          type="title"
          className="text-center text-2xl font-bold mb-4"
        >
          Barra
        </ThemedText>
        <ThemedView className="flex-row flex-wrap justify-between">
          <CardRow
            title="Gin Tonic"
            price={3500}
            icon="local-drink"
            color="drink"
            button={true}
            onQuantityChange={(quantity) => {
              handleQuantityChange('Gin Tonic', 3500, quantity);
              console.log(`Quantity changed to ${quantity}`);
            }}
          />
          <CardRow
            title="Agua"
            description="Agua mineral"
            price={1200}
            icon="water-drop"
            color="drink"
            button={true}
            onQuantityChange={(quantity) =>
              handleQuantityChange('Agua', 1200, quantity)
            }
          />
          <CardRow
            title="Cerveza"
            price={1800}
            color="drink"
            button={true}
            onQuantityChange={(quantity) =>
              console.log(`Quantity changed to ${quantity}`)
            }
          />
          <CardRow
            title="Fernet"
            description="Fernet, coca"
            price={2700}
            color="drink"
            button={true}
            onQuantityChange={(quantity) =>
              console.log(`Quantity changed to ${quantity}`)
            }
          />
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

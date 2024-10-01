import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView } from 'react-native';
import { CardRow } from '@/components/CardRow';
import { useCartContext } from '@/hooks/useCartContext';

export default function FoodScreen() {
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
            title="Hamburguesa"
            price={9500}
            icon="fastfood"
            color="food"
            button={true}
            onQuantityChange={(quantity) => {
              handleQuantityChange('Hamburguesa', 9500, quantity);
              console.log(`Quantity changed to ${quantity}`);
            }}
          />
          <CardRow
            title="Shawarma"
            description="Carnivoro"
            price={8500}
            icon="bakery-dining"
            color="food"
            button={true}
            onQuantityChange={(quantity) =>
              handleQuantityChange('Shawarma', 8500, quantity)
            }
          />
          <CardRow
            title="Fritas"
            description="Con sal y ketchup"
            price={2500}
            icon="fastfood"
            color="food"
            button={true}
            onQuantityChange={(quantity) =>
              handleQuantityChange('Fritas', 2500, quantity)
            }
          />
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

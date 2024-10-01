import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useCartContext } from '@/hooks/useCartContext';

export default function CartScreen() {
  const { cartItems } = useCartContext();

  return (
    <ThemedView className="flex-1 justify-center items-center">
      <ThemedText type="title" className="mb-4">
        Cart
      </ThemedText>
      {Object.keys(cartItems).length === 0 ? (
        <ThemedText>No items in the cart</ThemedText>
      ) : (
        Object.values(cartItems).map((item) => (
          <ThemedText key={item.title}>
            {item.title} - {item.quantity} x ${item.price.toFixed(2)}
          </ThemedText>
        ))
      )}
    </ThemedView>
  );
}

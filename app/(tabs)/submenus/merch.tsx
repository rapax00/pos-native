import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function MerchScreen() {
  return (
    <ThemedView className="flex-1 justify-center items-center">
      <ThemedText type="title" className="mb-4">
        Merch
      </ThemedText>
    </ThemedView>
  );
}

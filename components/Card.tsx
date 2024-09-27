import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';
import { MaterialIcons } from '@expo/vector-icons';

type MaterialIconNames = keyof typeof MaterialIcons.glyphMap;

interface CardProps {
  title: string;
  icon: MaterialIconNames;
  color: string;
  width?: 'half' | 'full';
  onPress: () => void;
  description?: string;
}

export function Card({
  title,
  icon,
  color,
  width = 'half',
  onPress,
  description,
}: CardProps) {
  return (
    <TouchableOpacity
      style={[
        styles.card,
        { backgroundColor: color },
        width === 'full' ? styles.fullWidth : styles.halfWidth,
      ]}
      onPress={onPress}
    >
      <ThemedView style={styles.iconContainer}>
        <MaterialIcons name={icon} size={24} color="white" />
      </ThemedView>
      <ThemedText style={styles.cardTitle}>{title}</ThemedText>
      {description && (
        <ThemedText style={styles.cardDescription}>{description}</ThemedText>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  halfWidth: {
    width: '48%',
  },
  fullWidth: {
    width: '100%',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
  },
});

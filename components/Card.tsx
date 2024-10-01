import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type MaterialIconNames = keyof typeof MaterialIcons.glyphMap;

interface CardProps {
  title: string;
  icon: MaterialIconNames;
  color: string;
  description?: string;
  width?: 'third' | 'half' | 'full';
  onPress: () => void;
}

export function Card({
  title,
  icon,
  color,
  description,
  width = 'half',
  onPress,
}: CardProps) {
  return (
    <TouchableOpacity
      style={[
        styles.card,
        { backgroundColor: color },
        width === 'half'
          ? styles.halfWidth
          : width === 'third'
            ? styles.thirdWidth
            : styles.fullWidth,
      ]}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        <MaterialIcons name={icon} size={24} color="white" />
      </View>
      <Text style={styles.cardTitle}>{title}</Text>
      {description && <Text style={styles.cardDescription}>{description}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  thirdWidth: {
    width: '30.5%',
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
    color: 'rgba(255, 255, 255, 0.8)',
  },
  cardDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
});

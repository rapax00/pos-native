import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type MaterialIconsNames = keyof typeof MaterialIcons.glyphMap;

interface CardRowProps {
  title: string;
  price: number;
  button?: boolean;
  description?: string;
  icon?: MaterialIconsNames;
  color?: string;
  onQuantityChange: (quantity: number) => void;
}

const typeColor: { [type: string]: string } = {
  default: 'gray',
  drink: 'dodgerblue',
  food: 'mediumseagreen',
  merch: 'orange',
};

export function CardRow({
  title,
  price,
  button = false,
  description,
  icon,
  color = 'default',
  onQuantityChange,
}: CardRowProps) {
  const [quantity, setQuantity] = useState(0);

  const handleAddOrAdjust = () => {
    if (quantity === 0) {
      setQuantity(1);
      onQuantityChange(1);
    }
  };

  const handleQuantityChange = (change: number) => {
    const newQuantity = Math.max(0, quantity + change);
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };
  return (
    <View style={[styles.card, { backgroundColor: typeColor[color] }]}>
      <View style={styles.infoContainer}>
        <MaterialIcons
          name={icon || 'shopping-bag'}
          size={32}
          color="white"
          style={styles.icon}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          {description && <Text style={styles.description}>{description}</Text>}
        </View>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>$ {price}</Text>
      </View>
      {button === true &&
        (quantity === 0 ? (
          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAddOrAdjust}
            accessibilityLabel={`Add ${title} to cart`}
          >
            <Text style={styles.addButtonText}>Agregar</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={[styles.quantityButton, styles.minusButton]}
              onPress={() => handleQuantityChange(-1)}
              accessibilityLabel={`Decrease quantity of ${title}`}
            >
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity
              style={[styles.quantityButton, styles.plusButton]}
              onPress={() => handleQuantityChange(1)}
              accessibilityLabel={`Increase quantity of ${title}`}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: 8,
    marginBottom: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoContainer: {
    flexDirection: 'row',
    marginRight: 16,
    alignItems: 'center',
    flex: 1,
  },
  textContainer: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    fontSize: 14,
    color: 'white',
  },
  priceContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 1,
  },
  icon: {
    marginRight: 8,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonContainer: {
    width: 'auto',
    height: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
  buttonText: {
    color: 'white',
    marginHorizontal: 16,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: 110,
    marginLeft: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#333',
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 20,
    padding: 4,
    width: 110,
    marginLeft: 8,
  },
  quantityButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  minusButton: {
    backgroundColor: '#555',
  },
  plusButton: {
    backgroundColor: '#4CAF50',
  },
  quantityButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
});

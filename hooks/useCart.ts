import { useState } from 'react';

export interface CartItem {
  title: string;
  price: number;
  quantity: number;
}

export const useCart = () => {
  const [cartItems, setCartItems] = useState<Record<string, CartItem>>({});

  const addToCart = (newItem: CartItem) => {
    setCartItems((prevItems) => {
      if (newItem.quantity <= 0) {
        const { [newItem.title]: _, ...newItems } = prevItems;
        return newItems;
      }

      const existingItem = prevItems[newItem.title];

      if (existingItem) {
        return {
          ...prevItems,
          [newItem.title]: {
            ...existingItem,
            quantity: newItem.quantity,
          },
        };
      } else {
        return {
          ...prevItems,
          [newItem.title]: newItem,
        };
      }
    });
    console.log(`Item added to cart: ${newItem.title}`);
  };

  const clearCart = () => {
    setCartItems({});
  };

  return {
    cartItems,
    addToCart,
    clearCart,
  };
};

import { createContext, ReactNode } from 'react';
import { CartItem, useCart } from '@/hooks/useCart';

interface CartContextType {
  cartItems: Record<string, CartItem>;
  addToCart: (item: CartItem) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { cartItems, addToCart, clearCart } = useCart();

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

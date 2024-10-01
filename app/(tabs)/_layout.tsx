import { CartProvider } from '@/context/Cart';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  const { colors } = useTheme();

  return (
    <CartProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Menu',
            tabBarIcon: ({ color }) => (
              <MaterialIcons size={28} name="menu-book" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: 'Carrito',
            tabBarIcon: ({ color }) => (
              <MaterialIcons size={28} name="shopping-cart" color={color} />
            ),
          }}
        />
        {/* hidden menus */}
        <Tabs.Screen
          name="submenus/admin"
          options={{
            title: 'Admin',
            tabBarButton: () => null,
          }}
        />
        <Tabs.Screen
          name="submenus/cash"
          options={{
            title: 'Caja',
            tabBarButton: () => null,
          }}
        />
        <Tabs.Screen
          name="submenus/drinks"
          options={{
            title: 'Barra',
            tabBarButton: () => null,
          }}
        />
        <Tabs.Screen
          name="submenus/extract"
          options={{
            title: 'Extract',
            tabBarButton: () => null,
          }}
        />
        <Tabs.Screen
          name="submenus/food"
          options={{
            title: 'Comida',
            tabBarButton: () => null,
          }}
        />
        <Tabs.Screen
          name="submenus/merch"
          options={{
            title: 'Merch',
            tabBarButton: () => null,
          }}
        />
      </Tabs>
    </CartProvider>
  );
}

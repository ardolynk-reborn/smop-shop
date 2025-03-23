import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { CartContext } from '../providers/CartProvider';

export default function _layout() {

  const { cart } = React.useContext(CartContext);

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false
      }}
    >
      <Tabs.Screen name="(products)"
        options={{
          tabBarIcon: ({ size, color }) => <Ionicons name="storefront-outline" size={size} color={color}
        />
        }}
      />
      <Tabs.Screen name="cart"
        options={{
          tabBarIcon: ({ size, color }) => <Ionicons name="cart-outline" size={size} color={color}/>,
          tabBarBadge: cart.length == 0 ? undefined : cart.reduce((total, item) => total + item.quantity, 0)
        }}
      >
      </Tabs.Screen>
    </Tabs>
 )
}
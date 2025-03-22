import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false
      }}
    >
      <Tabs.Screen name="(products)"
        options={{
          tabBarIcon: ({ size, color }) => <Ionicons name="storefront-outline" size={size} color={color}/>
        }}
      />
      <Tabs.Screen name="cart"
        options={{
          tabBarIcon: ({ size, color }) => <Ionicons name="cart-outline" size={size} color={color}/>
        }}
      />
    </Tabs>
  )
}
import { View, Text } from 'react-native'
import React from 'react'
import { ProductStackParamList } from './navigation';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from '.';
import DetailScreen from './detail';

const Stack = createStackNavigator<ProductStackParamList>();

export default function _layout() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="index" component={IndexScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="detail" component={DetailScreen} options={({ route }) => ({ title: route.params.name })}/>
    </Stack.Navigator>
  )
}

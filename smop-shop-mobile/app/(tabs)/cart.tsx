import React, { useContext, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import CartListItem from '../components/CartListItem';
import { CartContext } from '../providers/CartProvider';
import { CurrencyContext } from '../providers/CurrencyProvider';

const Cart = () => {
  const { cart } = useContext(CartContext);
  const { selectedCurrency, rates } = useContext(CurrencyContext);

  if (cart.length === 0) {
    return (
      <View style={styles.emptyCartContainer}>
        <Text style={styles.emptyCartText}>Your cart is empty</Text>
      </View>
    );
  }

  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} selectedCurrency={selectedCurrency} rates={rates} />}
        keyExtractor={(item) => item.product.id.toString()}
      />
      <TouchableOpacity style={styles.confirmOrderButton} onPress={() => console.log('Confirm order pressed')}>
        <Text style={styles.confirmOrderButtonText}>Confirm Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cartContainer: {
    flex: 1,
  },
  confirmOrderButton: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  confirmOrderButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default Cart;
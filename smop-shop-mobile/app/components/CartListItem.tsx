import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ListItemCommon from './ListItemCommon';
import { Ionicons } from '@expo/vector-icons';
import { CartContext, CartItemType } from '../providers/CartProvider';

const CardListItem = ({ cartItem, selectedCurrency, rates }: { cartItem: CartItemType, selectedCurrency: string, rates: any }) => {

  const { cart, addToCart, removeFromCart, removeAllFromCart, clearCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <ListItemCommon product={cartItem.product} selectedCurrency={selectedCurrency} rates={rates} />
      <View style={styles.cartContainer}>
        <View style={styles.leftContainer}>
          <TouchableOpacity onPress={() => { addToCart(cartItem.product) }}>
            <View style={styles.quantityButton}>
            <Text>+</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{cartItem.quantity}</Text>
          <TouchableOpacity style={styles.quantityButton} onPress={() => { removeFromCart(cartItem.product) }}>
              <Text>-</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.rightContainer}>
          <TouchableOpacity style={styles.removeButton} onPress={() => { removeAllFromCart(cartItem.product) }}>
            <Ionicons name="close-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
commonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  cartContainer: {
    flexDirection: 'row',
  },
  leftContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    width: 80,
    paddingHorizontal: 16
  },
  rightContainer: {
    justifyContent: 'center',
  },
  removeButton: {
    top: 0,
    right: 0,
    backgroundColor: '#ff0000',
    padding: 8,
    borderRadius: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    flexDirection: 'row',
    backgroundColor: '#ccc',
    justifyContent: 'center',
    height: 24,
  },
  quantityText: {
    marginHorizontal: 8,
    textAlign: 'center'
  },
});

export default CardListItem;
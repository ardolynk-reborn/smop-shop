import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
// import { ProductType } from '../../providers/ProductProvider'
import { Ionicons } from '@expo/vector-icons';


export default function details({ navigation, route}: {navigation: any, route: any}) {

  const product = route.params.product;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Image source={{ uri: product.imageUrl }} style={styles.image} />
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.localPricePlaceholder}>Local price: _______</Text>
        </View>
        <Text style={styles.amount}>Amount: {product.amount}</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  localPricePlaceholder: {
    fontSize: 16,
    color: '#666',
  },
  amount: {
    fontSize: 16,
    marginBottom: 20,
  },
  footer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  addToCartButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  addToCartButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});
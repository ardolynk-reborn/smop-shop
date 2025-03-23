import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useContext } from 'react'
import { RouteProp } from '@react-navigation/native';
import { ProductStackParamList } from './navigation';
import { CurrencyContext } from '@/app/providers/CurrencyProvider';
import { CartContext } from '@/app/providers/CartProvider';
import Toast from 'react-native-toast-message';
import { ProductType } from '@/app/providers/ProductProvider';

type DetailScreenRouteProp = RouteProp<ProductStackParamList, 'detail'>;

interface Route {
  route: DetailScreenRouteProp;
}

const DetailScreen: React.FC<Route> = ({ route }) => {
  
  const { selectedCurrency, rates } = useContext(CurrencyContext);
  const product = route.params;
  const { addToCart } = useContext(CartContext);

  const addToCartAndReport = (product: ProductType) => {
    const result = addToCart(product);
    if (result === true) {
      Toast.show({
        type: 'success',
        text1: 'Product added to cart',
        position: 'top',
      });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Sorry, we don\'t have enough of this product',
        position: 'top',
      });
    }
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.description}>{product.description}</Text>
        <Image source={{ uri: product.imageUrl }} style={styles.image} />
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{product.price} {product.currency}</Text>
          <Text style={styles.amount}>Amount: {product.amount}</Text>
        </View>
        <Text style={styles.localPricePlaceholder}>
          {product.currency === selectedCurrency ? '':
            `${(product.price * rates[product.currency]).toFixed(2)} ${selectedCurrency}`}
        </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.addToCartButton} onPress={() => addToCartAndReport(product)}>
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  image: {
    flex: 1,
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
    marginBottom: 20,
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

export default DetailScreen;
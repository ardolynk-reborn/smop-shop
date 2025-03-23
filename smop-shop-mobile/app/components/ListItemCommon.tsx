import { ProductType } from "../providers/ProductProvider";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ListItemCommon({product, selectedCurrency, rates}:
    {product: ProductType, selectedCurrency: string, rates: any}) {

  return (
    <>
      <Image source={{ uri: product.thumbnailUrl }} style={styles.thumbnail} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{product.price} {product.currency}</Text>
          <Text style={styles.localPricePlaceholder}>{selectedCurrency === product.currency ?
            '' : `${(product.price * rates[product.currency]).toFixed(2)} ${selectedCurrency}`}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 16,
  },
  priceContainer: {
    flex: 1,
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
  },
  localPricePlaceholder: {
    fontSize: 12,
    color: '#999',
  }
});
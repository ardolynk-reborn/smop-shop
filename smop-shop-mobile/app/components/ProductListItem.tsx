import { View, Text, Image, StyleSheet } from 'react-native'
import { ProductType } from '../providers/ProductProvider';
import { TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ProductStackParamList } from '../(tabs)/(products)/navigation';
import { useNavigation } from 'expo-router';
import ListItemCommon from './ListItemCommon';

type NavigationProps = StackNavigationProp<ProductStackParamList, 'index'>

export default function ProductListItem({product, selectedCurrency, rates}:
    {product: ProductType, selectedCurrency: string, rates: any}) {

  const navigation = useNavigation<NavigationProps>();

  return (
    <TouchableOpacity style={styles.container} onPress={() => { navigation.navigate('detail', product) }}>
      <ListItemCommon product={product} selectedCurrency={selectedCurrency} rates={rates} />
      <View style={styles.arrowContainer}>
        <Text style={styles.arrow}>→</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create ({
  container: {
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
    paddingHorizontal: 16,
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
  },
  arrowContainer: {
    justifyContent: 'center',
  },
  arrow: {
    fontSize: 20,
    color: '#ccc',
  },
});
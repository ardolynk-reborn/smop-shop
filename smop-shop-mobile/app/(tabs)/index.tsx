import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { ProductContext } from '../providers/ProductProvider';
import ProductListItem from '../components/ProductListItem';
import { CurrencyContext } from '../providers/CurrencyProvider';

export default function index({ navigation }: { navigation: any }) {

  const { products, next, bottomReached, setBottomReached, error, loading } = useContext(ProductContext);
  const {selectedCurrency, rates} = useContext(CurrencyContext);

  const renderFooter = () => {
    return next ? (
      <View style={{ paddingVertical: 20 }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    ) : <></>;
  };

  const handleEndReached = () => {
    if (next) {
      setBottomReached(true);
    }
  };

  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('details', { product: item })}>
            <ProductListItem product={item} selectedCurrency={selectedCurrency} rates={rates} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}

        ListFooterComponent={renderFooter}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}
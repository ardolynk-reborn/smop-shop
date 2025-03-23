import { View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { ProductContext, ProductType } from '../../providers/ProductProvider';
import ProductListItem from '../../components/ProductListItem';
import { CurrencyContext } from '../../providers/CurrencyProvider';

export default function IndexScreen() {

  const { products, next, setBottomReached } = useContext(ProductContext);
  const { selectedCurrency, rates } = useContext(CurrencyContext);

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
          // <TouchableOpacity onPress={() => {navigation.navigate('detail', item)}}>
          <ProductListItem product={item} selectedCurrency={selectedCurrency} rates={rates} />
          // </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}

        ListFooterComponent={renderFooter}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}

function createStackNavigation<T>() {
  throw new Error('Function not implemented.');
}

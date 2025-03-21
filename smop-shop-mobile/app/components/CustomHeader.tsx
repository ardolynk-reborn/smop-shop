import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { CurrencyContext } from '../providers/CurrencyProvider';

const CustomHeader = (props: any) => {

  const { currencies, selectedCurrency, setSelectedCurrency, error, loading } = useContext(CurrencyContext);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'USD', value: 'USD' },
    { label: 'EUR', value: 'EUR' },
  ]);

  useEffect(() => {
    if (!loading && !error && currencies.length > 0) {
      const currencyItems = currencies.map((currency: any) => ({
        label: currency.id,
        value: currency.id,
      }));
      setItems(currencyItems);
    }
  }, [currencies, loading, error]);

  return (
    <View style={styles.header}>
      <Text style={styles.title}>Smop Shop</Text>

      <DropDownPicker
        open={open}
        value={value || 'USD'}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onSelectItem={(item) => setSelectedCurrency(item.value || 'USD')}
        containerStyle={styles.dropdownContainer}
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownMenu}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 15,
    backgroundColor: '#6200ea',
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  dropdownContainer: {
    width: 96,
  },
  dropdown: {
    backgroundColor: 'white',
    borderColor: 'gray',
  },
  dropdownMenu: {
    backgroundColor: 'white',
    maxHeight: 720,
    overflow: 'scroll'
  },
});

export default CustomHeader;

import { SafeAreaProvider } from "react-native-safe-area-context";
import CurrencyProvider from "./providers/CurrencyProvider";
import { Stack } from "expo-router";
import CustomHeader from "./components/CustomHeader";
import ProductProvider from "./providers/ProductProvider";
import CartProvider from "./providers/CartProvider";

export default function RootLayout() {
  return (
    <CurrencyProvider>
      <ProductProvider>
        <CartProvider>
          <SafeAreaProvider>
            <Stack
              screenOptions={{
                header: (props) => <CustomHeader {...props} />
              }}
            >
              <Stack.Screen name="(tabs)" />
            </Stack>
          </SafeAreaProvider>
        </CartProvider>
      </ProductProvider>
    </CurrencyProvider>
  );
}

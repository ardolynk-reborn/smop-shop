import { createContext, useContext, useState } from "react";
import { ProductContext, ProductType } from "./ProductProvider";

export type CartItemType = {product: ProductType, quantity: number };

interface CartProviderType {
    cart: CartItemType[]
    addToCart: (product: ProductType, quantity?: number) => boolean;
    removeFromCart: (product: ProductType, quantity?: number) => boolean;
    removeAllFromCart: (product: ProductType) => void;
    clearCart: () => void;
}

export const CartContext = createContext<CartProviderType>({
    cart: [],
    addToCart: () => false,
    removeFromCart: () => false,
    removeAllFromCart: () => {},
    clearCart: () => {}
})

const CartProvider = ({ children }: { children: React.ReactNode } ) => {

    const [cart, setCart] = useState<CartItemType[]>([]);

    const addToCart = (product: ProductType, quantity = 1) => {
        const oldQuantity = cart.find(item => item.product.id === product.id)?.quantity;
        if (oldQuantity) {
            const newQuantity = oldQuantity + quantity;
            if (newQuantity <= 0 || newQuantity > product.amount) {
                return false;
            }
            setCart(prevCart => prevCart.map(item => item.product.id === product.id ? {...item, quantity: newQuantity} : item));
        }
        else {
            if (quantity <= 0 || quantity > product.amount) {
                return false;
            }
            setCart(prevCart => [...prevCart, {product, quantity}]);
        }
        return true;
    }

    const removeFromCart = (product: ProductType, quantity = 1) => {
        return addToCart(product, -quantity);
    }

    const removeAllFromCart = (product: ProductType) => {
        setCart(prevCart => prevCart.filter(item => item.product.id !== product.id));
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, removeAllFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
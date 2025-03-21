import { createContext, useEffect, useState } from "react";
import { API_BASE_URL, PRODUCTS_PAGE_SIZE } from "../constants";

export interface ProductInterface {
  id: number;
  name: string;
  description: string;
  price: number;
  currency: string;
  amount: number;
  thumbnailUrl: string;
  imageUrl: string;

}
interface ProductContextType {
  products: ProductInterface[];
  next: string | null;
  bottomReached: boolean;
  setBottomReached: (flag: boolean) => void;
  error: Error | null;
  loading: boolean;
}

export const ProductContext = createContext<ProductContextType>({
  products: [],
  next: `${API_BASE_URL}/products?size=${PRODUCTS_PAGE_SIZE}`, 
  bottomReached: true,
  setBottomReached: (flag) => {},
  error: null,
  loading: false
})

const ProductProvider = ({ children }: { children: React.ReactNode } ) => {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [next, setNext] = useState<string | null>(`${API_BASE_URL}/products?size=${PRODUCTS_PAGE_SIZE}`);
  const [bottomReached, setBottomReached] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading && bottomReached && next) {
      setLoading(true);
      setBottomReached(false);

      fetch(next)
        .then(response => response.json())
        .then(data => {
          setProducts(prevProducts => [...prevProducts, ...data.products]);
          setNext(data.next);
          setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        });
    }
  }, [bottomReached, next]);

  return (
    <ProductContext.Provider value={{ products, next, bottomReached, setBottomReached, error, loading }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider
export type { ProductInterface as ProductType }
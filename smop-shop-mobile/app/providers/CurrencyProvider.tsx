import { useState, useEffect, createContext } from 'react';
import { API_BASE_URL } from '../constants';

const apiBaseUrl = API_BASE_URL;

interface CurrencyContextType {
  currencies: any[];
  selectedCurrency: string;
  setSelectedCurrency: (value: string) => void;
  rates: any;
  error: Error | null;
  loading: boolean;
}

export const CurrencyContext = createContext<CurrencyContextType>({
  currencies: [],
  selectedCurrency: 'USD',
  setSelectedCurrency: () => {},
  rates: {},
  error: null,
  loading: false
});

const CurrencyProvider = ({ children }: { children: React.ReactNode } ) => {
  const [currencies, setCurrencies] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [rates, setRates] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCurrencies = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${apiBaseUrl}/currencies`);
        const data = await response.json();
        setCurrencies(data);
      } catch (error: Error | any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCurrencies();
  }, [apiBaseUrl]);

  useEffect(() => {
    const fetchRates = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${apiBaseUrl}/rates/${selectedCurrency}`);
        const data = await response.json();
        setRates(data.rates);
      } catch (error: Error | any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchRates();
  }, [selectedCurrency]);

  return <CurrencyContext.Provider value={{ currencies, selectedCurrency, setSelectedCurrency, rates, error, loading}}>
    {children}
  </CurrencyContext.Provider>;
};

export default CurrencyProvider;
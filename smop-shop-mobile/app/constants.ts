import Constants from "expo-constants";
const { manifest2 } = Constants;

export const API_BASE_URL = manifest2?.extra?.API_BASE_URL || 
  'http://' + Constants.expoConfig?.hostUri?.split(':').shift()?.concat(':8080')

export const PRODUCTS_PAGE_SIZE = 15
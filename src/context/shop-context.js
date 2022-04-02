import React from "react";

export default React.createContext({
  products: [],
  cart: [],
  loading: true,
  addProductToCart: (product) => {},
  removeProductFromCart: (productId) => {},
  setProductsList: (products) => {},
  clearProductList: () => {},
  setLoading: (loading) => {},
});

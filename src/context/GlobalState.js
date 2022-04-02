import React, { useState, useReducer } from "react";

import ShopContext from "./shop-context";
import {
  shopReducer,
  SET_PRODUCTS,
  CLEAR_PRODUCTS,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  SET_LOADING,
  CLEAR_CART,
} from "./reducers";

const GlobalState = (props) => {
  const products = [];

  const [cartState, dispatch] = useReducer(shopReducer, {
    cart: [],
    products: [],
    loading: true,
  });

  const addProductToCart = (product) => {
    dispatch({ type: ADD_PRODUCT, product: product });
  };

  const setProductsList = (products) => {
    dispatch({ type: SET_PRODUCTS, products: products });
  };

  const clearProductsList = () => {
    dispatch({ type: CLEAR_PRODUCTS, products: [] });
  };
  const removeProductFromCart = (productId) => {
    dispatch({ type: REMOVE_PRODUCT, productId: productId });
  };

  const setLoading = (loading) => {
    dispatch({ type: SET_LOADING, loading: loading });
  };

  return (
    <ShopContext.Provider
      value={{
        products: cartState.products,
        cart: cartState.cart,
        loading: cartState.loading,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        setProductsList: setProductsList,
        clearProductsList: clearProductsList,
        setLoading: setLoading,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;

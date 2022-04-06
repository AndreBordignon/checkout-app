import React, { useState, useReducer } from "react";

import ShopContext from "./shop-context";
import {
  shopReducer,
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

  const removeProductFromCart = (productId) => {
    dispatch({ type: REMOVE_PRODUCT, productId: productId });
  };
  const clearCart = () => {
    dispatch({ type: CLEAR_CART, cart: [] });
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
        setLoading: setLoading,
        clearCart: clearCart,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;

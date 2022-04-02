import AsyncStorage from "@react-native-async-storage/async-storage";

export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_LOADING = "SET_LOADING";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const CLEAR_CART = "CLEAR_CART";

const addProductToCart = (product, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === product.id
  );

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex],
    };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }
  AsyncStorage.setItem("MY_CART", JSON.stringify(updatedCart));
  return { ...state, cart: updatedCart };
};

const removeProductFromCart = (productId, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === productId
  );

  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  };
  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }
  AsyncStorage.setItem("MY_CART", JSON.stringify(updatedCart));
  return { ...state, cart: updatedCart };
};

const clearCart = () => {
  AsyncStorage.removeItem("MY_CART");
  return { cart: [] };
};

const setLoading = (loading, state) => {
  return { loading: loading };
};

const setProductList = (products, state) => {
  return { ...state, products: products };
};

export const shopReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.product, state);
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, state);

    case CLEAR_CART:
      return clearCart(action.cart, state);

    case SET_PRODUCTS:
      return setProductList(action.products, state);

    case SET_LOADING:
      return setLoading(action.loading, state);
    default:
      return state;
  }
};

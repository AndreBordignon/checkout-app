import React, { useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { FlatList, ActivityIndicator } from "react-native";
import { Container, SectionTitle, Button } from "./styles";

import {
  getAllProducts,
  getProductsByCategory,
} from "../../../services/ProductService";
import ProductCard from "../../../components/ProductCard";
import FilterBar from "../../../components/FilterBar";
import shopContext from "../../../context/shop-context";

function ProductList({ navigation }) {
  const [categories, setCategories] = React.useState();
  const [selectedCategorie, setSelectedCategorie] = React.useState();
  const [favoriteProducts, setFavoriteProducts] = React.useState();
  const context = useContext(shopContext);
  const { products, setProductsList, addProductToCart, setLoading, loading } =
    context;
  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    filterProductByCategory(selectedCategorie);
  }, [selectedCategorie]);

  useEffect(() => {
    setMyCartItems();
  }, []);

  const setMyCartItems = () => {
    AsyncStorage.getItem("MY_CART")
      .then((value) => {
        updatedCart = JSON.parse(value);
        if (updatedCart) {
          updatedCart.map((item) => {
            addProductToCart(item);
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    AsyncStorage.removeItem("MY_CART");
  };

  const fetchAllProducts = async (desc = false) => {
    setLoading(true);
    await getAllProducts(desc)
      .then((response) => {
        const notFavoritesLength = response.data.length;
        setFavoriteProducts(response.data.slice(0, 5));

        const productsList = response.data.slice(5, notFavoritesLength);
        setProductsList(productsList);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const filterProductByCategory = async (category) => {
    if (selectedCategorie == "Ultimos") {
      fetchAllProducts(true);
      return;
    }
    setLoading(true);

    await getProductsByCategory(category)
      .then((response) => {
        const notFavoritesLength = response.data.length;
        setFavorites(response.data);
        setProductsList(response.data.slice(5, notFavoritesLength));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <ActivityIndicator
        size="small"
        style={{ flex: 1, alignItems: "center" }}
      />
    );
  }
  return (
    <Container>
      <FilterBar
        selectedCategorie={selectedCategorie}
        setSelectedCategorie={setSelectedCategorie}
      />
      {favoriteProducts && (
        <>
          <SectionTitle>Novidades</SectionTitle>
          <FlatList
            data={favoriteProducts}
            renderItem={({ item }) => (
              <ProductCard
                navigation={navigation}
                product={item}
                key={item.id}
                isFavorite={true}
              />
            )}
            keyExtractor={(item) => `${item.id}-${item.name}`}
            horizontal
            style={{
              minHeight: 320,
              borderBottomWidth: 1,
              borderBottomColor: "#EBEBED",
            }}
          />
        </>
      )}
      {products && (
        <>
          <SectionTitle>Produtos</SectionTitle>
          <FlatList
            data={products}
            renderItem={({ item }) => (
              <ProductCard
                navigation={navigation}
                product={item}
                isFavorite={false}
                key={item.id}
              />
            )}
            keyExtractor={(item) => `${item.id}-${item.name}`}
            style={{ minHeight: 320, flex: 1 }}
            numColumns={2}
          />
        </>
      )}
    </Container>
  );
}

export default ProductList;

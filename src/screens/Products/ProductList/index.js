import React, { useEffect } from "react";

import { FlatList } from "react-native";
import { Container, SectionTitle } from "./styles";

import {
  getAllProducts,
  getProductsByCategory,
} from "../../../services/ProductService";
import ProductCard from "../../../components/ProductCard";
import FilterBar from "../../../components/FilterBar";

function ProductList({ navigation }) {
  const [products, setProducts] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [selectedCategorie, setSelectedCategorie] = React.useState();
  const [favoriteProducts, setFavoriteProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    filterProductByCategory(selectedCategorie);
  }, [selectedCategorie]);

  const fetchAllProducts = async (desc = false) => {
    setLoading(true);
    await getAllProducts(desc)
      .then((response) => {
        const notFavoritesLength = response.data.length;
        setFavorites(response.data);
        setProducts(response.data.slice(5, notFavoritesLength));
        console.log(products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const filterProductByCategory = async (category = "") => {
    if (selectedCategorie == "Ultimos") {
      fetchAllProducts(true);
      return;
    }
    setLoading(true);

    await getProductsByCategory(category)
      .then((response) => {
        const notFavoritesLength = response.data.length;
        setFavorites(response.data);
        setProducts(response.data.slice(5, notFavoritesLength));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const setFavorites = (response) => {
    setFavoriteProducts(response.slice(0, 5));
  };
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
                isFavorite={true}
              />
            )}
            keyExtractor={(item) => item.id}
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
              />
            )}
            keyExtractor={(item) => item.id}
            style={{ minHeight: 320, flex: 1 }}
            numColumns={2}
          />
        </>
      )}
    </Container>
  );
}

export default ProductList;

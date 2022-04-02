import React, { useContext } from "react";
import { Image, Text } from "react-native";

import {
  Container,
  UpperTitle,
  Title,
  Pricing,
  Descriptions,
  BoxPricing,
  AddToCartButton,
  BoxImage,
  PlusText,
} from "./styles";
import ShopContext from "../../context/shop-context";

function ProductCard({ navigation, product, isFavorite }) {
  const context = useContext(ShopContext);
  const { addProductToCart } = context;

  return (
    <Container isFavorite>
      <BoxImage>
        <Image
          source={{ uri: product.image }}
          style={{ width: 172, height: 183, borderRadius: 16 }}
        />
        {!isFavorite && (
          <AddToCartButton
            style={{
              position: "absolute",
              bottom: 5,
              right: 5,
            }}
            onPress={() => {
              addProductToCart(product);
            }}
          >
            <Text
              style={{
                color: "#8775fe",
                fontSize: 20,
              }}
            >
              +
            </Text>
          </AddToCartButton>
        )}
      </BoxImage>
      <UpperTitle>{product.category}</UpperTitle>
      <Title numberOfLines={1}>{product.title}</Title>
      {isFavorite && (
        <>
          <Descriptions numberOfLines={2}>{product.description}</Descriptions>
          <BoxPricing>
            <Pricing>${product.price}</Pricing>
            <AddToCartButton
              onPress={() => {
                addProductToCart(product);
              }}
            >
              <PlusText>+</PlusText>
            </AddToCartButton>
          </BoxPricing>
        </>
      )}
      {!isFavorite && <Pricing>${product.price}</Pricing>}
    </Container>
  );
}

export default ProductCard;

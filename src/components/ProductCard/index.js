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

function ProductCard({ navigation, product, isFavorite }) {
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
              navigation.navigate("Cart");
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
            <AddToCartButton>
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

import React, { useContext } from "react";

import { FlatList, Image, Alert, Text } from "react-native";
import EmptyCardItem from "../../../components/EmptyCardItem";
import {
  BoxCartItem,
  BoxDescription,
  CartItemTitle,
  Pricing,
  QuantityButton,
  QuantityMarker,
  Separator,
  QuantityText,
} from "./styles";
import shopContext from "../../../context/shop-context";

function MyCart({ navigation }) {
  const context = useContext(shopContext);
  const { cart, addProductToCart, removeProductFromCart } = context;

  const renderCartItem = (navigation, item) => {
    return (
      <BoxCartItem>
        <Image
          source={{ uri: item.image }}
          style={{ width: 40, height: 50, marginHorizontal: 20 }}
        />
        <BoxDescription>
          <CartItemTitle numberOfLines={1}>{item.title}</CartItemTitle>
          <Pricing>
            <Pricing style={{ fontSize: 12 }}>{item.quantity}x</Pricing> $
            {item.price}
          </Pricing>
        </BoxDescription>
        <QuantityButton>
          <QuantityMarker
            onPress={() => {
              item.quantity === 1
                ? Alert.alert(
                    "Remover Item",
                    "Se deseja remover o item do carrinho clique em prosseguir",
                    [
                      {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel",
                      },
                      {
                        text: "OK",
                        onPress: () => removeProductFromCart(item.id),
                      },
                    ]
                  )
                : removeProductFromCart(item.id);
            }}
          >
            <QuantityText>-</QuantityText>
          </QuantityMarker>
          <Separator />
          <QuantityMarker onPress={() => addProductToCart(item)}>
            <QuantityText>+</QuantityText>
          </QuantityMarker>
        </QuantityButton>
      </BoxCartItem>
    );
  };
  return (
    <FlatList
      data={cart}
      renderItem={({ item }) => renderCartItem(item)}
      keyExtractor={() => Math.random()}
      contentContainerStyle={{
        flexGrow: 1,
        marginVerital: 5,
        marginHorizontal: 10,
      }}
      ListEmptyComponent={() => <EmptyCardItem navigation={navigation} />}
    />
  );
}

export default MyCart;

import React, { useContext, useEffect, useState } from "react";

import { FlatList, Image, Alert, Text } from "react-native";
import EmptyCartItem from "../../../components/EmptyCartItem";
import {
  BoxCartItem,
  BoxDescription,
  CartItemTitle,
  Pricing,
  QuantityButton,
  QuantityMarker,
  Separator,
  QuantityText,
  ContainerPrice,
  TotalText,
  PriceText,
  ButtonCheckout,
  ButtonCheckoutText,
} from "./styles";
import shopContext from "../../../context/shop-context";
import { SafeAreaView } from "react-native-safe-area-context";
import AlertModal from "../../../components/AlertModal";

function MyCart({ navigation }) {
  const context = useContext(shopContext);
  const [cartPrice, updateCartPrice] = useState();
  const [modalVisible, setModalVisible] = useState();
  const { cart, addProductToCart, removeProductFromCart } = context;

  const setCartValue = () => {
    try {
      let newTotal = cart.reduce((total, cartItem) => {
        return (total += cartItem.quantity * cartItem.price);
      }, 0);
      newTotal = parseFloat(newTotal.toFixed(2));
      updateCartPrice(newTotal);
    } catch (erro) {
      return;
    }
  };

  useEffect(() => {
    setCartValue();
  }, [cart]);

  const renderCartItem = (item) => {
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
    cart && (
      <>
        <AlertModal
          title="Sucesso!"
          message="Compra realizada com sucesso, aproveite!"
          onClose={() => {
            setModalVisible(false);
          }}
          isVisible={modalVisible}
        />
        <FlatList
          data={cart}
          renderItem={({ item }) => renderCartItem(item)}
          keyExtractor={() => Math.random()}
          contentContainerStyle={{
            flexGrow: 1,
            marginVertical: 5,
            marginHorizontal: 10,
          }}
          ListEmptyComponent={() => <EmptyCartItem navigation={navigation} />}
        />

        {cart.length > 0 && (
          <SafeAreaView>
            <ContainerPrice>
              <TotalText>Total</TotalText>
              <PriceText>${cartPrice}</PriceText>
            </ContainerPrice>

            <ButtonCheckout onPress={() => setModalVisible(true)}>
              <ButtonCheckoutText>Finalizar Compra</ButtonCheckoutText>
            </ButtonCheckout>
          </SafeAreaView>
        )}
      </>
    )
  );
}

export default MyCart;

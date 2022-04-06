import { useState, useContext } from "react";
import { Text, Image } from "react-native";

import {
  Container,
  ModalView,
  ModalTitle,
  ModalMessage,
  Button,
  ButtonText,
} from "./styles";
import CONFIRMATION from "../../../assets/icons/CONFIRMATION.png";
import shopContext from "../../context/shop-context";

function AlertModal({ isVisible = false, onClose, title, message }) {
  const context = useContext(shopContext);
  const { cart, clearCart } = context;

  const closeModal = () => {
    clearCart();
    onClose();
  };
  return (
    <Container
      visible={isVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <ModalView>
        <Image source={CONFIRMATION} style={{ width: 160, height: 160 }} />
        <ModalTitle>{title}</ModalTitle>
        <ModalMessage>{message}</ModalMessage>
        <Button onPress={() => closeModal()}>
          <ButtonText>Prosseguir</ButtonText>
        </Button>
      </ModalView>
    </Container>
  );
}

export default AlertModal;

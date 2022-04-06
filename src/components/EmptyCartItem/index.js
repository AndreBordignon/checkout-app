import { Text } from "react-native";
import bag from "../../../assets/icons/BAG_1.png";

import {
  EmptyContainer,
  TitleEmptyCart,
  ButtonEmptyCart,
  ButtonAddItems,
  ImageEmpty,
} from "./styles";

function EmptyCartItem({ navigation }) {
  return (
    <EmptyContainer>
      <ImageEmpty source={bag} />
      <TitleEmptyCart>Nenhum item adicionado {"\n"} no carrinho</TitleEmptyCart>
      <ButtonEmptyCart onPress={() => navigation.navigate("Products")}>
        <ButtonAddItems>Adicionar Itens</ButtonAddItems>
      </ButtonEmptyCart>
    </EmptyContainer>
  );
}

export default EmptyCartItem;

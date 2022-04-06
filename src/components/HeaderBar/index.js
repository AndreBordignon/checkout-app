import { useContext } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  Container,
  CartIcon,
  CartButton,
  Title,
  Circle,
  NumberItems,
} from "./styles";
import cartIcon from "../../../assets/icons/cart.png";

import shopContext from "../../context/shop-context";
function HeaderBar(props) {
  const context = useContext(shopContext);

  const { cart } = context;

  return (
    <>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "#fff" }}
        edges={["top", "right", "left"]}
      />
      <Container>
        <Title title={props.title}>{props.title}</Title>

        {cart.length > 0 && (
          <CartButton onPress={() => props.navigation.navigate("Cart")}>
            <CartIcon source={cartIcon} />
            <Circle>
              <NumberItems>{cart.length}</NumberItems>
            </Circle>
          </CartButton>
        )}
      </Container>
    </>
  );
}

export default HeaderBar;

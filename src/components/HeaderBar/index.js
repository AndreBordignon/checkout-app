import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Container, CartIcon, CartButton, Title } from "./styles";
import cart from "../../../assets/icons/cart.png";

function HeaderBar(props) {
  return (
    <>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "#fff" }}
        edges={["top", "right", "left"]}
      />
      <Container>
        <Title title={props.title}>{props.title}</Title>

        {props.cart && (
          <CartButton onPress={() => props.navigation.navigate("Cart")}>
            <CartIcon source={cart} />
          </CartButton>
        )}
      </Container>
    </>
  );
}

export default HeaderBar;

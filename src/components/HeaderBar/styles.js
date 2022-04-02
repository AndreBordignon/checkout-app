import styled from "styled-components/native";
export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #fff;
`;
export const Title = styled.Text`
  font-weight: bold;
  font-size: ${(props) => (props.title == "Carrinho" ? "12px" : "20px")};
  text-transform: ${(props) =>
    props.title == "Carrinho" ? "uppercase" : "none"};
  text-align: center;
  margin: ${(props) => (props.title == "Carrinho" ? "0 auto" : "0")};
  color: ${(props) => (props.title == "Carrinho" && "#85868A") || "#000"};
`;
export const CartButton = styled.TouchableOpacity``;
export const CartIcon = styled.Image``;

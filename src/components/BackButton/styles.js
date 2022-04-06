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
export const Circle = styled.View`
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 24px;
  padding: 2px 0;
  position: absolute;
  right: -8px;
  top: -8px;
  z-index: 12;
  border-color: #dbdbdbfa;
  border-width: 1px;
`;
export const NumberItems = styled.Text`
  text-align: center;
  color: #9a8bff;
  font-size: 12px;
`;

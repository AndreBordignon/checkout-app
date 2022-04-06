import styled from "styled-components/native";

export const Container = styled.View``;
export const BoxDescription = styled.View`
  justify-content: space-between;
`;
export const BoxCartItem = styled.View`
  align-items: center;
  background-color: #ece9ff;
  margin: 10px 0px;
  flex-direction: row;
  border-radius: 12px;
  padding: 10px;
`;
export const CartItemTitle = styled.Text`
  font-weight: bold;
  width: 200px;
  font-size: 14px;
  margin: 0px 5px;
`;

export const QuantityButton = styled.View`
  background-color: #fff;
  border-color: #cccccc;
  flex-direction: row;
  border-radius: 50px;
`;
export const QuantityMarker = styled.TouchableOpacity`
  padding: 5px 8px;
  margin: 0 5px;
`;
export const QuantityText = styled.Text`
  font-weight: bold;
  font-size: 10px;
  color: #cccccc;
  text-align: center;
`;
export const Separator = styled.View`
  width: 1px;
  background-color: #cccccc;
`;
export const Pricing = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin: 0px 5px;
  color: #8775fe;
`;
export const EmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const TitleEmptyCart = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #9a9999;
  text-transform: uppercase;
  margin: 10px 0;
`;
export const ButtonEmptyCart = styled.TouchableOpacity`
  font-size: 14px;
  font-weight: bold;
  padding: 5px 0;
  background-color: #8775fe;
  border-radius: 37px;
  margin: 10px 0;
  min-width: 320px;
  min-height: 37px;
`;
export const ButtonAddItems = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  margin: 10px 0;
`;
export const ContainerPrice = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #cccccc;
  padding: 10px 40px;
  border-left-width: 0;
  border-right-width: 0;
`;
export const TotalText = styled.Text`
  font-weight: bold;
`;
export const PriceText = styled.Text`
  font-weight: bold;
`;
export const ButtonCheckout = styled.TouchableOpacity`
  margin: 10px 30px;
  background-color: #504db6;
  padding: 16px 30px;
  border-radius: 37px;
`;
export const ButtonCheckoutText = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
`;

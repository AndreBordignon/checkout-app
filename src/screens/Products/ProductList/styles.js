import styled from "styled-components/native";

export const Container = styled.View`
  margin: 20px 20px;
  flex: 1;
`;
export const SectionTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0 10px;
`;
export const Button = styled.Button`
  background-color: #f94d6a;
  flex: 1;
  height: 48px;
  flex-direction: row;
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

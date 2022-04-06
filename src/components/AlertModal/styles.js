import styled from "styled-components/native";

export const Container = styled.Modal``;
export const ModalView = styled.View`
  background-color: #8775fe;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const ModalTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 22px;
  margin: 10px 0;
  text-transform: uppercase;
`;
export const ModalMessage = styled.Text`
  color: #fff;
  margin: 0px 10px;
  font-size: 14px;
`;
export const Button = styled.TouchableOpacity`
  background-color: #504db6;
  padding: 16px 50px;
  border-radius: 37px;
  width: 317px;
  position: absolute;
  bottom: 0;
  margin: 30px 0;
`;
export const ButtonText = styled.Text`
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
`;

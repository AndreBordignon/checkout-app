import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  margin: 0 5px;
`;
export const Tag = styled.TouchableOpacity`
  padding: 5px 10px;
  border: 1px solid #ebebed;
  border-radius: 8px;
  margin: 0 10px;
  background-color: ${(props) => (props.selected ? "#8775fe" : "transparent")};
`;
export const TagText = styled.Text`
  color: ${(props) => (props.selected ? "#fff" : "#B4B4B6")};
  font-weight: bold;
`;

import { useContext } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function BackButton(props) {
  const context = useContext(shopContext);

  const { cart, addProductToCart, setLoading, loading } = context;

  return (
    <>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "#fff" }}
        edges={["top", "right", "left"]}
      />
      <Text>Aaaa</Text>
    </>
  );
}

export default BackButton;

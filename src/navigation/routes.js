import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductList from "../screens/Products/ProductList";
import MyCart from "../screens/Cart/myCart";
import HeaderBar from "../components/HeaderBar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();
function Routes() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Products">
          <Stack.Screen
            name="Products"
            component={ProductList}
            options={({ navigation }) => ({
              header: (props) => (
                <HeaderBar
                  {...props}
                  navigation={navigation}
                  cart
                  title="Produtos"
                />
              ),
            })}
          />
          <Stack.Screen
            name="Cart"
            component={MyCart}
            options={({ navigation }) => ({
              header: (props) => (
                <HeaderBar
                  {...props}
                  navigation={navigation}
                  title="Carrinho"
                />
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default Routes;

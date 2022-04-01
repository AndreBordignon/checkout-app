import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductList from "../screens/Products/ProductList";
import MyCart from "../screens/Cart/myCart";

const Stack = createNativeStackNavigator();
function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Products"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Products" component={ProductList} />
        <Stack.Screen name="Cart" component={MyCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

import { NavigationContainer } from "@react-navigation/native";
import StackClientes from "./clientes.routes";

export const Routes = () => {
  return (
    <NavigationContainer>
      <StackClientes />
    </NavigationContainer>
  );
};

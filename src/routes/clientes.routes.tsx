import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DetalheCliente } from "../screens/DetalheCliente";
import { ListarClientes } from "../screens/ListarClientes";
import { theme } from "../theme";

export type StackClientesNavigationProps = {
  ListagemClientes: undefined;
  DetalheCliente: {
    cliente: {
      id: string;
      nome: string;
      idade: string;
      email: string;
      endereco: string;
      estado: string;
      cidade: string;
    };
  };
};

const { Navigator, Screen } =
  createNativeStackNavigator<StackClientesNavigationProps>();

const StackClientes = () => {
  return (
    <Navigator initialRouteName="ListagemClientes">
      <Screen
        name="ListagemClientes"
        component={ListarClientes}
        options={{
          title: "Listagem de Clientes",
          headerStyle: { backgroundColor: theme.colors.background },
          headerTintColor: theme.colors.text_primary,
          headerTitleAlign: "center",
        }}
      />
      <Screen
        name="DetalheCliente"
        component={DetalheCliente}
        options={{
          title: "Detalhes do Cliente",
          headerStyle: { backgroundColor: theme.colors.background },
          headerTintColor: theme.colors.text_primary,
          headerTitleAlign: "center",
        }}
      />
    </Navigator>
  );
};

export default StackClientes;

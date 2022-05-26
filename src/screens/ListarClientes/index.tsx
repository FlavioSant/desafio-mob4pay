import { useEffect, useState } from "react";
import Constants from "expo-constants";
import Feather from "@expo/vector-icons/Feather";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { theme } from "../../theme";
import { Loading } from "../../components/Loading";
import { FetchError } from "../../utils/FetchError";
import { StackClientesNavigationProps } from "../../routes/clientes.routes";

const API_URL = Constants?.manifest?.extra?.apiURL;

interface Cliente {
  id: string;
  nome: string;
  idade: string;
  email: string;
  endereco: string;
  estado: string;
  cidade: string;
}

type NavigationProps = NavigationProp<
  StackClientesNavigationProps,
  "DetalheCliente"
>;

export const ListarClientes = () => {
  const navigation = useNavigation<NavigationProps>();
  const [isFetching, setIsFetching] = useState(true);
  const [clientes, setClientes] = useState<Cliente[]>([]);

  const fetchClientes = async () => {
    try {
      const response = await fetch(API_URL, {
        method: "GET",
      });

      if (response.status !== 200) {
        throw await FetchError.from(response);
      }

      const textResponse = await response.text();

      const parsedClientes = JSON.parse(textResponse);

      setClientes(parsedClientes.clientes);
    } catch (err: any) {
      console.error(err);

      Alert.alert(
        "Erro ao consultar clientes",
        `Name: ${err.name}\nStatus: ${err.status}\nDescrição: ${err.data?.message}`
      );
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        {clientes.length > 0 ? (
          clientes.map((cliente) => (
            <TouchableOpacity
              key={cliente.id}
              style={styles.card}
              onPress={() => navigation.navigate("DetalheCliente", { cliente })}
            >
              <View>
                <Text>ID: {cliente.id}</Text>
                <Text>Nome: {cliente.nome}</Text>
                <Text>Estado: {cliente.estado}</Text>
              </View>
              <Feather
                name="arrow-right"
                size={18}
                color={theme.colors.primary}
              />
            </TouchableOpacity>
          ))
        ) : (
          <View>
            <Text style={styles.noDataText}>Nenhum registro encontrado.</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

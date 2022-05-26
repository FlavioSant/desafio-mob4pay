import { ScrollView, Text, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { styles } from "./styles";

interface Cliente {
  id: string;
  nome: string;
  idade: string;
  email: string;
  endereco: string;
  estado: string;
  cidade: string;
}

type ParamList = {
  ListarClientes: {
    cliente: Cliente;
  };
};

export const DetalheCliente = () => {
  const { params } = useRoute<RouteProp<ParamList>>();

  const cliente = params.cliente;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentSection}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{cliente.nome}</Text>
          <Text style={styles.cardText}>{cliente.idade} anos</Text>
        </View>

        <Text style={styles.infoTitle}>Contato:</Text>

        <View style={styles.infoRow}>
          <Text style={styles.infoTextLabel}>E-mail:</Text>
          <Text style={styles.infoText}>{cliente.email}</Text>
        </View>

        <Text style={styles.infoTitle}>Endereço:</Text>

        <View style={styles.infoRow}>
          <Text style={styles.infoTextLabel}>Logradouro:</Text>
          <Text style={styles.infoText}>{cliente.endereco}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoTextLabel}>Cidade:</Text>
          <Text style={styles.infoText}>
            {cliente.cidade} - {cliente.estado}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

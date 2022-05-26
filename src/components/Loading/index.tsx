import { ActivityIndicator, View } from "react-native";

import { theme } from "../../theme";
import { styles } from "./styles";

export const Loading = () => {
  return (
    <View style={styles.loadingWrapper}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  );
};

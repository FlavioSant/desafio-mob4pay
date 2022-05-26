import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Routes } from "./src/routes";
import { theme } from "./src/theme";

const App = () => {
  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.background, flex: 1 }}>
      <StatusBar style="dark" />
      <Routes />
    </SafeAreaView>
  );
};

export default App;

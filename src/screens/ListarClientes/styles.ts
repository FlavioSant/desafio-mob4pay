import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: 20,
  },
  contentContainer: {
    marginBottom: 40,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: theme.colors.gray100,
    backgroundColor: theme.colors.white,
    marginTop: 6,
    padding: 16,
  },
  noDataText: {
    fontSize: 18,
    textAlign: "center",
    justifyContent: "center",
  },
});

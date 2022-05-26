import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: 20,
  },
  contentSection: {
    marginBottom: 40,
  },
  card: {
    backgroundColor: theme.colors.primary,
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  cardTitle: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: "700",
  },
  cardText: {
    color: theme.colors.white,
  },
  infoTitle: {
    color: theme.colors.text_secondary,
    fontSize: 16,
    marginVertical: 16,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.colors.white,
    borderRadius: 4,
    marginTop: 2,
    padding: 16,
  },
  infoTextLabel: {
    color: theme.colors.text_primary,
    fontSize: 16,
    fontWeight: "700",
  },
  infoText: {
    color: theme.colors.text_secondary,
  },
});

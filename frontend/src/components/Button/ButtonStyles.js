import { StyleSheet } from "react-native";

const primaryBackgroundColor = "#648FFF";
const secondaryBackgroundColor = "#d3d3d3";

export const styles = (isPrimary) => StyleSheet.create({
  container: {
    elevation: 8,
    backgroundColor: isPrimary ? primaryBackgroundColor : secondaryBackgroundColor,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  text: {
    fontSize: 18,
    color: isPrimary ? '#fff' : '#000',
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
});

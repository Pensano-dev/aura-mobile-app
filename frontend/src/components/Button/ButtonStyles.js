import { StyleSheet } from "react-native";

const primaryBackgroundColor = "#648FFF";

export const styles = (isPrimary) => StyleSheet.create({
  container: {
    elevation: 8,
    backgroundColor:  primaryBackgroundColor,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  text: {
    fontSize: 18,
    color:  '#fff',
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
});

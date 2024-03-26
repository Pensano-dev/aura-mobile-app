import { StyleSheet } from "react-native";
import { globalColours } from "../../styles/globalColourVariables";

export const styles = StyleSheet.create({
  container: {
    elevation: 8,
    backgroundColor: globalColours.primaryButtonBackground,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  text: {
    fontSize: 18,
    color: globalColours.lightText,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

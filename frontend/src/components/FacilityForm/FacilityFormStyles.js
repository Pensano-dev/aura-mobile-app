import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const facilityWidth = (screenWidth - 48) / 3;

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 20,
  },
  facilityContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  facility: {
    width: facilityWidth,
    marginBottom: 15,
  },
});

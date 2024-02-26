import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const facilityWidth = (screenWidth - 48) / 3;

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 13,
    paddingVertical: 13,
  },
  facilityContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  buttonContainer: {
    marginTop: 60,
  },
  facility: {
    width: facilityWidth,
    marginBottom: 15,
  },
});

import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const facilityWidth = (screenWidth - 48) / 3;

export const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Arial",
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
  },
  subheading: {
    fontSize: 18,
    fontFamily: "Arial",
    marginBottom: 20,
    marginLeft: 10,
  },
  formContainer: {
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

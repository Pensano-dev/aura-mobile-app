import React from "react";
import FacilityForm from "../../components/FacilityForm/FacilityForm";
import { View, Text, StyleSheet } from "react-native";
import { styleVariables } from "../../styles/globalStyleVariables";

const FacilitySelectorScreen = () => {
  return (
    <>
      <View style={styles.screenContainer}>
        <Text style={styles.screenHeader}>CAFES</Text>
        <FacilityForm />
      </View>
    </>
  );
};

export default FacilitySelectorScreen;

const styles = StyleSheet.create({
  screenHeader: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
    marginLeft: 10,
    height: "8%"
  },
  screenContainer: {
    height: "100%",
    paddingHorizontal: 13,
    paddingVertical: 13,
    backgroundColor: styleVariables.lightGreenBackground
  }
});

import React from "react";
import { Text, StyleSheet } from "react-native";
import FacilityForm from "../components/FacilityForm/FacilityForm";

const FacilitySelectorScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.header}>CAFES</Text>
      <Text style={styles.subheading}>What are your needs today?</Text>
      <FacilityForm />
    </>
  );
};

const styles = StyleSheet.create({
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
});

export default FacilitySelectorScreen;

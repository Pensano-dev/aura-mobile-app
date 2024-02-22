import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./FacilityStyles";

export default Facility = ({ facilityName, iconName }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name={iconName} size={65} color="black" style={styles.icon} />
      </View>
      <Text>{facilityName}</Text>
    </View>
  );
};

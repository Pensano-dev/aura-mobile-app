import React from "react";
import Facility from "../Facility/Facility";
import { View, StyleSheet } from "react-native";

export default FacilityForm = () => {
  const facilityList = [
    // incomplete list just to showcase the outcome
    { name: "Wifi", iconName: "wifi" },
    { name: "No Bright Lights", iconName: "flashlight" },
    { name: "Low Noise", iconName: "volume-mute" },
  ];

  return (
    <>
      <View style={styles.container}>
        {facilityList.map((facility, index) => (
          <Facility
            key={index}
            facilityName={facility.name}
            iconName={facility.iconName}
          />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});

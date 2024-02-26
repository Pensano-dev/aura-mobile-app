import React, { useState } from "react";
import Facility from "../Facility/Facility";
import { View, Button } from "react-native";
import { styles } from "./FacilityFormStyles";

export default FacilityForm = () => {
  const [facilityChoices, setFacilityChoices] = useState(new Set());

  const facilityList = [
    { name: "Wifi", iconName: "wifi" },
    { name: "No Bright Lights", iconName: "flashlight" },
    { name: "Low Noise", iconName: "volume-mute" },
    { name: "Wifi 2", iconName: "wifi" },
    { name: "No Bright Lights 2", iconName: "flashlight" },
    { name: "Low Noise 2", iconName: "volume-mute" },
    { name: "Wifi 3", iconName: "wifi" },
    { name: "No Bright Lights 3", iconName: "flashlight" },
    { name: "Low Noise 3", iconName: "volume-mute" },
  ];

  const handleUpdateFacilityChoices = (facilityName) => {
    const updatedFacilityChoices = new Set(facilityChoices);
    if (updatedFacilityChoices.has(facilityName)) {
      updatedFacilityChoices.delete(facilityName);
    } else {
      updatedFacilityChoices.add(facilityName);
    }
    setFacilityChoices(updatedFacilityChoices);
  };

  const handleSubmit = () => {
    console.log("facilityChoices:", Array.from(facilityChoices));
    setFacilityChoices(new Set());
  };

  return (
    <View style={styles.container}>
      <View style={styles.facilityContainer}>
        {facilityList.map((facility, index) => (
          <Facility
            key={index}
            facilityName={facility.name}
            iconName={facility.iconName}
            onPress={() => handleUpdateFacilityChoices(facility.name)}
            isPressed={facilityChoices.has(facility.name)}
          />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <Button title={"Find Cafes"} onPress={handleSubmit} color={"green"} />
      </View>
    </View>
  );
};
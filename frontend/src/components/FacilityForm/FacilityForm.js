import React, { useState } from "react";
import Facility from "../Facility/Facility";
import { View, Button } from "react-native";
import { styles } from "./FacilityFormStyles";

export default FacilityForm = () => {
  const [facilityChoices, updateFacilityChoices] = useState([]);

  const facilityList = [
    // incomplete list just to showcase the outcome
    // when the BE is sorted then upcoming logic will need to loop through the facility options and match an icon name against them
    { name: "Wifi", iconName: "wifi" },
    { name: "No Bright Lights", iconName: "flashlight" },
    { name: "Low Noise", iconName: "volume-mute" },
    { name: "Wifi", iconName: "wifi" },
    { name: "No Bright Lights", iconName: "flashlight" },
    { name: "Low Noise", iconName: "volume-mute" },
    { name: "Wifi", iconName: "wifi" },
    { name: "No Bright Lights", iconName: "flashlight" },
    { name: "Low Noise", iconName: "volume-mute" },
  ];

  const handleUpdateFacilityChoices = (facilityName) => {
    if (!facilityChoices.includes(facilityName)) {
      updateFacilityChoices([...facilityChoices, facilityName]);
      console.log(facilityChoices);
    }
  };

  const handleSubmit = () => {
    console.log("Placeholder submission log");
    // logic for form submission to backend to send array of venues
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
            style={styles.facility}
          />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <Button title={"Find Cafes"} onPress={handleSubmit} color={"green"} />
      </View>
    </View>
  );
};

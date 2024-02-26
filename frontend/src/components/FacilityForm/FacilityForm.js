import React, { useState } from "react";
import Facility from "../Facility/Facility";
import { View, Button, Pressable } from "react-native";
import { styles } from "./FacilityFormStyles";

export default FacilityForm = () => {
  const [facilityChoices, updateFacilityChoices] = useState([]);
  const [pressedFacility, setPressedFacility] = useState(null);

  const facilityList = [
    // incomplete list just to showcase the outcome, duplicated 3xjust to show it on the ui
    // when the BE is sorted then upcoming logic will need to loop through the facility options and match an icon name against them
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
    if (!facilityChoices.includes(facilityName)) {
      updateFacilityChoices([...facilityChoices, facilityName]);
      setPressedFacility(
        facilityName === pressedFacility ? null : facilityName,
      );
    } else {
      const updatedChoices = facilityChoices.filter(
        (choice) => choice !== facilityName,
      );
      updateFacilityChoices(updatedChoices);
    }
  };

  const handleSubmit = () => {
    console.log("facilityChoices:", facilityChoices);
    updateFacilityChoices([]);
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
            isPressed={facility.name === pressedFacility}
          />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <Button title={"Find Cafes"} onPress={handleSubmit} color={"green"} />
      </View>
    </View>
  );
};

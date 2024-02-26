import React, { useState } from "react";
import Facility from "../Facility/Facility";
import { View, Pressable } from "react-native";
import { styles } from "./FacilityFormStyles";
import Button from "../Button/Button";

export default FacilityForm = () => {
  const [facilityList, setFacilityList] = useState([]);

  const exampleList = [
    { name: "Wifi", icon: "wifi" },
    { name: "Low noise", icon: "volume-mute" },
    { name: "Toilets", icon: "business" },
    { name: "Work friendly", icon: "headset" },
    { name: "Example", icon: "paw" },
    { name: "Example 2", icon: "notifications" },
  ];

  const handleSelectFacility = (facilityName) => {
    const isFacilitySelected = facilityList.includes(facilityName);
    if (!isFacilitySelected) {
      const updatedFacilityList = [...facilityList, facilityName];
      setFacilityList(updatedFacilityList);
    } else {
      const updatedFacilityList = facilityList.filter(
        (facility) => facility !== facilityName,
      );
      setFacilityList(updatedFacilityList);
    }
  };

  const handleSubmit = () => {
    console.log("facilityList:", facilityList);
  };

  return (
    <>
      {/* Add reset button */}
      <View style={styles.container}>
        <View style={styles.facilityContainer}>
          {exampleList.map((facility, index) => (
            <View key={index} style={styles.facility}>
              <Facility
                key={index}
                icon={facility.icon}
                name={facility.name}
                onPress={() => handleSelectFacility(facility.name)}
                isPressed={facilityList.includes(facility.name)}
              />
            </View>
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <Pressable>
            <Button onPress={() => handleSubmit()} title={"Continue"} />
          </Pressable>
        </View>
      </View>
    </>
  );
};

import React, { useState } from "react";
import Facility from "../Facility/Facility";
import { View, Pressable, Text } from "react-native";
import { styles } from "./FacilityFormStyles";
import Button from "../Button/Button";
import { Ionicons } from "@expo/vector-icons";
import PopUpModal from "../Modal/PopUpModal";
import { facilitiesData } from "../../data/facilitiesData";

const FacilityForm = () => {
  const [wantedFacilities, setWantedFacilities] = useState([]);
  const [requiredFacilities, setRequiredFacilities] = useState([]);
  const [lastPressTime, setLastPressTime] = useState({});
  const [isModalVisible, setModalVisible] = useState(false);

  const handleSelectFacility = (facilityName) => {
    const now = Date.now();
    const lastPress = lastPressTime[facilityName] || 0;
    const timeDiff = now - lastPress;
  
    if (timeDiff < 500) { 
      const isRequiredFacility = requiredFacilities.includes(facilityName);
  
      if (!isRequiredFacility) {
        const updatedRequiredFacilities = [...requiredFacilities, facilityName];
        setRequiredFacilities(updatedRequiredFacilities);
      } else {
        const updatedRequiredFacilities = requiredFacilities.filter(
          (facility) => facility !== facilityName
        );
        setRequiredFacilities(updatedRequiredFacilities);
      }
    } else {
      const isWantedFacilitySelected = wantedFacilities.includes(facilityName);
      const updatedWantedFacilities = isWantedFacilitySelected
        ? wantedFacilities.filter((facility) => facility !== facilityName)
        : [...wantedFacilities, facilityName];
      setWantedFacilities(updatedWantedFacilities);
  
      if (requiredFacilities.includes(facilityName)) {
        const updatedRequiredFacilities = requiredFacilities.filter(
          (facility) => facility !== facilityName
        );
        setRequiredFacilities(updatedRequiredFacilities);
      }
    }
  
    const updatedPressTime = { ...lastPressTime, [facilityName]: now };
    setLastPressTime(updatedPressTime);
  };
  
  const handleLongPressFacility = (facilityName) => {
    if (!requiredFacilities.includes(facilityName)) {
      const updatedRequiredFacilities = [...requiredFacilities, facilityName];
      const updatedWantedFacilities = [...wantedFacilities, facilityName];
      setRequiredFacilities(updatedRequiredFacilities);
      setWantedFacilities(updatedWantedFacilities)
    } 
  
    const now = Date.now();
    const updatedPressTime = { ...lastPressTime, [facilityName]: now };
    setLastPressTime(updatedPressTime);
  };
  

  
  
  const handleSubmit = () => {
    if (wantedFacilities.length === 0) {
      setModalVisible(true);
    } else {
      console.log("facility:", wantedFacilities);
    }
  };

  const handleFormReset = () => {
    setWantedFacilities([]);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  return (
    <>
      <View style={styles.formContainer}>
        <View>
          <View style={styles.subheadingContainer}>
            <Text style={styles.subheading}>
              Which facilities are you searching for?
            </Text>
            <Pressable
              onPress={() => handleFormReset()}
              style={styles.refreshIcon}
            >
              <Ionicons name={"refresh-circle-sharp"} size={30} />
            </Pressable>
          </View>
          <View style={styles.facilityContainer}>
            {facilitiesData.map((facility, index) => (
              <View key={index} style={styles.facility}>
                <Facility
                  key={index}
                  icon={facility.icon}
                  name={facility.name}
                  onLongPress={() => handleLongPressFacility(facility.name)}
                  onPress={() => handleSelectFacility(facility.name)}
                  isSelected={wantedFacilities.includes(facility.name)}
                  isDoubleSelected={requiredFacilities.includes(facility.name)}
                />
              </View>
            ))}
          </View>
        </View>
        <View>
          <Pressable>
            <Button onPress={() => handleSubmit()} title={"Continue"} />
          </Pressable>
        </View>
      </View>
      <PopUpModal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        message={"Please select at least 1 facility."}
      />
    </>
  );
};

export default FacilityForm;

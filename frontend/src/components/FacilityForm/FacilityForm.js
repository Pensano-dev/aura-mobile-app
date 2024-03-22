import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    // Remove duplicates from wantedFacilities
    const filteredFacilities = wantedFacilities.filter(facility => !requiredFacilities.includes(facility));
    if (filteredFacilities.length !== wantedFacilities.length) {
      // Only update if there are changes
      setWantedFacilities(filteredFacilities);
    }
  }, [wantedFacilities, requiredFacilities]);


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
      const isRequiredFacility = requiredFacilities.includes(facilityName); 
  
      if (!isRequiredFacility) { 
        const updatedWantedFacilities = isWantedFacilitySelected
          ? wantedFacilities.filter((facility) => facility !== facilityName)
          : [...wantedFacilities, facilityName];
        setWantedFacilities(updatedWantedFacilities);
      }
  
      if (isRequiredFacility) { 
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
    if (requiredFacilities.length === 0) {
      setModalVisible(true);
    } else {
      console.log("wanted facility:", wantedFacilities);
      console.log("required facilities:", requiredFacilities)
    }
  };

  const handleFormReset = () => {
    setWantedFacilities([]);
    setRequiredFacilities([]);
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
                  // onPress={requiredFacilities.includes(facility.name) ? () => handleFormReset() : () => handleSelectFacility(facility.name)}
                  isSelected={wantedFacilities.includes(facility.name)}
                  isDoubleSelected={requiredFacilities.includes(facility.name)}
                />
              </View>
            ))}
          </View>
        </View>
        <View>
          <Pressable>
            <Button onPress={() => handleSubmit()} title={"The old button!"} />
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

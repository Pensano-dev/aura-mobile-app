import React, { useState } from "react";
import Facility from "../Facility/Facility";
import { View, Pressable, Text } from "react-native";
import { styles } from "./FacilityFormStyles";
import Button from "../Button/Button";
import { Ionicons } from "@expo/vector-icons";
import PopUpModal from "../Modal/PopUpModal";
import { facilitiesData } from "../../data/facilitiesData";

const FacilityForm = () => {
  const [facilities, setFacilities] = useState([]);
  const [requiredFacilities, setRequiredFacilities] = useState([]);
  const [lastPressTime, setLastPressTime] = useState({});
  const [isModalVisible, setModalVisible] = useState(false);

  const handleSelectFacility = (facilityName) => {
    const now = Date.now();
    const lastPress = lastPressTime[facilityName] || 0;
    const timeDiff = now - lastPress;
  
    if (timeDiff < 500) { 
      const isDoubleFacilitySelected = requiredFacilities.includes(facilityName);
  
      if (!isDoubleFacilitySelected) {
        const updatedDoubleFacilityList = [...requiredFacilities, facilityName];
        setRequiredFacilities(updatedDoubleFacilityList);
      } else {
        const updatedDoubleFacilityList = requiredFacilities.filter(
          (facility) => facility !== facilityName
        );
        setRequiredFacilities(updatedDoubleFacilityList);
      }
    } else {
      const isFacilitySelected = facilities.includes(facilityName);
      const updatedFacilityList = isFacilitySelected
        ? facilities.filter((facility) => facility !== facilityName)
        : [...facilities, facilityName];
      setFacilities(updatedFacilityList);
  
      if (requiredFacilities.includes(facilityName)) {
        const updatedDoubleFacilityList = requiredFacilities.filter(
          (facility) => facility !== facilityName
        );
        setRequiredFacilities(updatedDoubleFacilityList);
      }
    }
  
    const updatedPressTime = { ...lastPressTime, [facilityName]: now };
    setLastPressTime(updatedPressTime);
  };
  
  const handleLongPressFacility = (facilityName) => {
    if (!requiredFacilities.includes(facilityName)) {
      const updatedDoubleFacilityList = [...requiredFacilities, facilityName];
      const updatedFacilityList = [...facilities, facilityName];
      setRequiredFacilities(updatedDoubleFacilityList);
      setFacilities(updatedFacilityList)
    } 
  
    const now = Date.now();
    const updatedPressTime = { ...lastPressTime, [facilityName]: now };
    setLastPressTime(updatedPressTime);
  };
  

  
  
  const handleSubmit = () => {
    if (facilities.length === 0) {
      setModalVisible(true);
    } else {
      console.log("facility:", facilities);
    }
  };

  const handleFormReset = () => {
    setFacilities([]);
    setDoubleFacilities([]);
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
            {/* <Pressable
              onPress={() => handleFormReset()}
              style={styles.refreshIcon}
            >
              <Ionicons name={"refresh-circle-sharp"} size={30} />
            </Pressable> */}
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
                  isSelected={facilities.includes(facility.name)}
                  isDoubleSelected={requiredFacilities.includes(facility.name)}
                />
              </View>
            ))}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            isPrimary={false}
            onPress={() => handleFormReset()}
            title={"Clear all"}
          />
          <Button
            isPrimary={true}
            onPress={() => handleSubmit()}
            title={"Next"}
          />
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

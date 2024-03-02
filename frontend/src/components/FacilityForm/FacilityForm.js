import React, { useState } from "react";
import Facility from "../Facility/Facility";
import { View, Pressable, Text } from "react-native";
import { styles } from "./FacilityFormStyles";
import Button from "../Button/Button";
import { Ionicons } from "@expo/vector-icons";
import PopUpModal from "../Modal/PopUpModal";
import { mockFacilities } from "./mockData";

const FacilityForm = () => {
  const [facilityList, setFacilityList] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  
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
    if (facilityList.length === 0) {
      setModalVisible(true);
    } else {
      console.log("facilityList:", facilityList);
    }
  };

  const handleFormReset = () => {
    setFacilityList([]);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <View style={styles.formContainer}>
        <Text style={styles.header}>CAFES</Text>
        <View style={styles.subheadingContainer}>
          <Text style={styles.subheading}>What are your needs today?</Text>
          <Pressable onPress={() => handleFormReset()}>
            <Ionicons name={"refresh-circle-sharp"} size={30} />
          </Pressable>
        </View>
        <View style={styles.facilityContainer}>
          {mockFacilities.map((facility, index) => (
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
      <PopUpModal isVisible={isModalVisible} onClose={handleCloseModal} message={'Please select at least 1 facility.'} />
    </>
  );
};

export default FacilityForm;

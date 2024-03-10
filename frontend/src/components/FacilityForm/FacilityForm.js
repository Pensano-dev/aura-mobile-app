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
  const [isModalVisible, setModalVisible] = useState(false);

  const handleSelectFacility = (facilityName) => {
    const isFacilitySelected = facilities.includes(facilityName);

    if (!isFacilitySelected) {
      const updatedFacilityList = [...facilities, facilityName];
      setFacilities(updatedFacilityList);
    } else {
      const updatedFacilityList = facilities.filter(
        (facility) => facility !== facilityName
      );
      setFacilities(updatedFacilityList);
    }
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
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <View style={styles.formContainer}>
        <View>
          <View style={styles.subheadingContainer}>
            <Text style={styles.subheading}>What are your needs today?</Text>
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
                  onPress={() => handleSelectFacility(facility.name)}
                  isSelected={facilities.includes(facility.name)}
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

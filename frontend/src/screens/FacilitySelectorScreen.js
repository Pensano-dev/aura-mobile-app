import React from 'react';
import FacilityComponent from '../components/FacilityComponent/FacilityComponent';

export default FacilitySelectorScreen = ({ navigation }) => {

  const facilityList = [
    // incomplete list just to showcase the outcome 
    { name: "Wifi", iconName: "wifi" },
    { name: "No Bright Lights", iconName: "flashlight" },
    { name: "Low Noise", iconName: "volume-mute" }
  ];

  return (
    <>
      {facilityList.map((facility, index) => (
        <FacilityComponent key={index} name={facility.name} iconName={facility.iconName} />
      ))}
    </>
  );
};

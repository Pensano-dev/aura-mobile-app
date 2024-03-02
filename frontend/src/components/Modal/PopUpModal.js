import React from "react";
import Modal from "react-native-modal";
import { View, Text } from "react-native";
import Button from "../Button/Button";
import { styles } from "./PopUpModalStyles";

const PopUpModal = ({ isVisible, onClose, message }) => {
  return (
    <View>
      <Modal isVisible={isVisible} style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>{message}</Text>
          <Button title="Close" onPress={onClose} />
        </View>
      </Modal>
    </View>
  );
};

export default PopUpModal;

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default AttributeSelectorScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="I'm a slightly pointless example navigation button"
          onPress={() =>
            navigation.navigate('Placeholder', { name: 'Example' })
          }
        />
      </View>
      <View style={styles.centerContent}>
        <Text style={styles.tempTitle}>AURA</Text>
        <Text style={styles.tempText}>
          All content on this page is a placeholder for the Attribute Selector Form
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
    width: 200,  
    borderColor: '#1155dd',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: '#cceeff',
    alignItems: 'center',
    alignSelf: 'center',
  },
  exampleButton: {
    fontSize: 20,
    color: '#1155dd',
    width: 200,
    textAlign: 'center',
  },
  centerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#aaddff',
  },
  tempTitle: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#1155aa',
  },
  tempText: {
    fontSize: 20,
    color: '#5577aa',
    width: 300,
    textAlign: 'center',
  },
});

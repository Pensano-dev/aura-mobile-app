import { StyleSheet, Text, View } from 'react-native';

export default PlaceholderScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.placeholderText}> Fairly pointless {route.params.name} screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cceeff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#3377ff',
    width: 200,
    textAlign: 'center',
  },
});

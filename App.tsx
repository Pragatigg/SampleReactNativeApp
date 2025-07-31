/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import Config from "react-native-config";
import { StyleSheet, View, Text } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World! {Config.API_URL} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
});

export default App;

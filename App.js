import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Loggedin from './Loggedin'
import LoggedinContent from './LoggedinContent';
import Loggedin from './components/Loggedin';

export default function App() {
  return (
    <View style={styles.container} className="bg-gray-800">
      {/* <Text className="text-red-700">Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />
      <Loggedin/>
      {/* <LoggedinContent/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

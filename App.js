import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Cookie from "./components/Cookie";

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Text>TEST</Text>
      {/* GameStore (horizontal) */}
      <Cookie />
      {/* Cookie counter */}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});

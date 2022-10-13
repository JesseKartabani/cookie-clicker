import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Cookie from "./components/Cookie";

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Cookie />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});

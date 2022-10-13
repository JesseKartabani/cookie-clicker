import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Cookie from "./components/Cookie";
import CookieCounter from "./components/CookieCounter";

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <CookieCounter />
      <Cookie />
      {/* GameStore (horizontal) */}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});

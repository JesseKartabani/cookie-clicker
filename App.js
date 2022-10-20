import { StyleSheet, Text, View } from "react-native";
import { MenuProvider } from "react-native-popup-menu";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Cookie from "./components/Cookie";

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <MenuProvider>
        <Cookie />
      </MenuProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});

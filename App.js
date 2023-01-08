import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "./src/HomeScreen";

export default function App() {
  return (
    <SafeAreaView>
      <HomeScreen />
    </SafeAreaView>
  );
}

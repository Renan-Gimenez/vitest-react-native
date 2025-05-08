import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Routes } from "@/routes";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Routes />
    </View>
  );
}

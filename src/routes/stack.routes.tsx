import { createStackNavigator } from "@react-navigation/stack";

import type { RootStackParamList } from "@/types/navigation";

import { HomeScreen, SettingsScreen } from "@/screens";

const Stack = createStackNavigator<RootStackParamList>();

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

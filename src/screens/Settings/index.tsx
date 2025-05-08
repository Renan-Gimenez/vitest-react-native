import { Button, Text, View } from "react-native";

import { styles } from "./styles";
import { useAppNavigation } from "@/hooks/useAppNavigation";

export const SettingsScreen = () => {
  const router = useAppNavigation();

  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>

      <Button title="Go Back" onPress={() => router.goBack()} />
    </View>
  );
};

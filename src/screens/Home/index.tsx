import { Button, Text, View } from "react-native";

import { useAppNavigation } from "@/hooks/useAppNavigation";

import { styles } from "./styles";
import { RootStackParamList } from "@/types/navigation";

export const HomeScreen = () => {
  const router = useAppNavigation();

  const handleNavigate = (screen: keyof RootStackParamList) => {
    router.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>

      <Button
        title="Go to Settings"
        onPress={() => handleNavigate("settings")}
      />
    </View>
  );
};

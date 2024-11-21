import { View, Text, Pressable } from "react-native";
import { Link, useNavigation } from "expo-router";

export default function Home() {
  return (
    <View>
      <Text>Welcome Home</Text>

      <Link replace href="/about" asChild>
        <Pressable>
          <Text>Go to about</Text>
        </Pressable>
      </Link>
    </View>
  );
}

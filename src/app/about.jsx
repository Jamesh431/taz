import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";

export default function about() {
  return (
    <View>
      <Text>Welcome to about page</Text>

      <Link replace href="/" asChild>
        <Pressable>
          <Text>Home</Text>
        </Pressable>
      </Link>
    </View>
  );
}

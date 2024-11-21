import { Stack } from "expo-router";

export default function layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" options={{}} />

      <Stack.Screen name="about" options={{}} />
    </Stack>
  );
}

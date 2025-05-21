import { Stack } from "expo-router";
import "./global.css"
export default function RootLayout() {
  return (
      <Stack>
        <Stack.Screen
            name="(tabs)"
            Options={{
              headerShown: false
        }} />
        <Stack.Screen
            name="movie"
            Options={{
              headerShown: false
        }} />

      </Stack>
  );
}

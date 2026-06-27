 import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: 'Login' }} />
      <Stack.Screen name="home" options={{ title: 'Home' }} />
      <Stack.Screen name="detail" options={{ title: 'Detail' }} />
      <Stack.Screen name="about" options={{ title: 'About Us' }} />
    </Stack>
  );
}
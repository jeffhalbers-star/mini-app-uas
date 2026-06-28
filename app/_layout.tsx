 import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Perbaikan: Menggunakan komponen Stack.Screen yang benar untuk index */}
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name="home" />
      <Stack.Screen name="detail" />
    </Stack>
  );
}
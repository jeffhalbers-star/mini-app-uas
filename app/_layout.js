 import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Mendaftarkan halaman utama index (Splash Screen) */}
      <Stack.Screen name="index" />
      {/* Mendaftarkan halaman login */}
      <Stack.Screen name="login" />
      {/* Mendaftarkan halaman home */}
      <Stack.Screen name="home" />
      {/* Mendaftarkan halaman detail */}
      <Stack.Screen name="detail" />
    </Stack>
  );
}
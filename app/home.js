 import { StyleSheet, Text, View, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Halaman Home</Text>
      <Button title="Lihat Detail Produk" onPress={() => router.push('/detail')} />
      <View style={{ marginVertical: 10 }} />
      <Button title="Tentang Aplikasi" onPress={() => router.push('/about')} />
      <View style={{ marginVertical: 10 }} />
      <Button title="Logout" onPress={() => router.replace('/')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
 import { StyleSheet, Text, View, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function DashboardScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard Ringkasan</Text>
      <View style={styles.box}>
        <Text style={styles.boxText}>Status Akun: Aktif</Text>
        <Text style={styles.boxText}>Developer: Student Project</Text>
      </View>
      <Button title="Logout" color="#ff4d4d" onPress={() => router.replace('/login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  box: { backgroundColor: '#e6f4fe', padding: 20, borderRadius: 10, marginBottom: 30 },
  boxText: { fontSize: 16, color: '#333', marginBottom: 5 }
});
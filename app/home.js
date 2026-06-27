 import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ini adalah Halaman Home</Text>
      <TouchableOpacity style={styles.card} onPress={() => router.push('/detail')}>
        <Text style={styles.cardTitle}>Lihat Detail Item 1</Text>
        <Text style={styles.cardSub}>Klik untuk melihat navigasi halaman ke-5</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  text: { fontSize: 18, marginBottom: 20, fontWeight: '500' },
  card: { padding: 20, backgroundColor: '#f9f9f9', borderRadius: 10, borderWidth: 1, borderColor: '#eee' },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#4A90E2' },
  cardSub: { fontSize: 12, color: '#666', marginTop: 5 }
});
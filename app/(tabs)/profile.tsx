import { StyleSheet, Text, View, Image } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.avatarPlaceholder}>
        <Text style={styles.avatarText}>U</Text>
      </View>
      <Text style={styles.name}>Developer Mahasiswa</Text>
      <Text style={styles.bio}>Membangun aplikasi keren dengan React Native & Expo.</Text>
      
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>📌 Versi Aplikasi: 1.0.0</Text>
        <Text style={styles.infoText}>🏫 Kampus: Universitas PGRI Kanjuruhan Malang</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
  avatarPlaceholder: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#E5E7EB', justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  avatarText: { fontSize: 36, fontWeight: 'bold', color: '#9CA3AF' },
  name: { fontSize: 22, fontWeight: 'bold', color: '#111827' },
  bio: { fontSize: 14, color: '#6B7280', textAlign: 'center', marginTop: 5, paddingHorizontal: 20 },
  infoBox: { marginTop: 30, width: '100%', padding: 15, backgroundColor: '#F9FAFB', borderRadius: 10, borderWidth: 1, borderColor: '#E5E7EB' },
  infoText: { fontSize: 14, color: '#374151', marginBottom: 8 },
});
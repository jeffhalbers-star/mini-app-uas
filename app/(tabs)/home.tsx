import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>Halo, User! 👋</Text>
        <Text style={styles.subtitle}>Berikut ringkasan aktivitas Anda hari ini.</Text>
      </View>

      <View style={styles.grid}>
        <View style={styles.card}><Text style={styles.cardTitle}>Pesanan</Text><Text style={styles.cardValue}>12</Text></View>
        <View style={styles.card}><Text style={styles.cardTitle}>Saldo</Text><Text style={styles.cardValue}>Rp 500k</Text></View>
        <View style={styles.card}><Text style={styles.cardTitle}>Pesan</Text><Text style={styles.cardValue}>4 New</Text></View>
        <View style={styles.card}><Text style={styles.cardTitle}>Promo</Text><Text style={styles.cardValue}>3 Aktif</Text></View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6' },
  header: { padding: 20, backgroundColor: '#4F46E5', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, marginBottom: 20 },
  welcome: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  subtitle: { color: '#E0E7FF', marginTop: 5 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', padding: 10, justifyContent: 'space-between' },
  card: { backgroundColor: '#fff', width: '46%', padding: 20, borderRadius: 15, marginBottom: 15, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.2 },
  cardTitle: { color: '#6B7280', fontSize: 14 },
  cardValue: { fontSize: 20, fontWeight: 'bold', color: '#111827', marginTop: 5 },
});
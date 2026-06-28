 import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function DetailScreen() {
  const { title, price } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Produk</Text>
      
      <View style={styles.detailBox}>
        <Text style={styles.label}>Nama Barang:</Text>
        <Text style={styles.value}>{title}</Text>
        
        {/* PERBAIKAN DI SINI: Menggunakan kurung siku [ ] untuk menggabungkan style */}
        <Text style={[styles.label, { marginTop: 15 }]}>Harga:</Text>
        <Text style={styles.priceValue}>{price}</Text>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>Kembali ke Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F9FAFB', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  detailBox: { backgroundColor: '#fff', padding: 20, borderRadius: 12, borderWidth: 1, borderColor: '#E5E7EB', marginBottom: 30 },
  label: { fontSize: 14, color: '#6B7280' },
  value: { fontSize: 18, fontWeight: 'bold', color: '#1F2937', marginTop: 5 },
  priceValue: { fontSize: 20, fontWeight: 'bold', color: '#10B981', marginTop: 5 },
  backButton: { backgroundColor: '#374151', padding: 15, borderRadius: 10, alignItems: 'center' },
  backText: { color: '#fff', fontWeight: 'bold' }
});
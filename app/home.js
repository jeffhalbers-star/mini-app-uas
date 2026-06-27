import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const DATA_BARANG = [
  { id: '1', nama: 'Sepatu Running Pro', harga: 'Rp 850.000' },
  { id: '2', nama: 'Tas Ransel Outdoor', harga: 'Rp 450.000' },
  { id: '3', nama: 'Jaket Windbreaker', harga: 'Rp 350.000' },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Daftar Produk Pilihan</Text>
      <FlatList
        data={DATA_BARANG}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push({ pathname: '/detail', params: { nama: item.nama, harga: item.harga } })}
          >
            <Text style={styles.itemNama}>{item.nama}</Text>
            <Text style={styles.itemHarga}>{item.harga}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB', padding: 15 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 15, color: '#111827' },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 12, marginBottom: 12, elevation: 2 },
  itemNama: { fontSize: 18, fontWeight: '600', color: '#1F2937' },
  itemHarga: { fontSize: 16, color: '#4F46E5', marginTop: 5, fontWeight: 'bold' },
});
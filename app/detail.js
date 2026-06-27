import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function DetailScreen() {
  const { nama, harga } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.detailBox}>
        <Text style={styles.label}>Nama Produk:</Text>
        <Text style={styles.value}>{nama}</Text>

        <Text style={styles.label, { marginTop: 15 }}>Harga Produk:</Text>
        <Text style={styles.price}>{harga}</Text>

        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>Kembali ke Beranda</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6', padding: 20, justifyContent: 'space-between' },
  detailBox: { backgroundColor: '#fff', padding: 25, borderRadius: 15, elevation: 3 },
  label: { fontSize: 14, color: '#6B7280', fontWeight: '500' },
  value: { fontSize: 24, fontWeight: 'bold', color: '#1F2937', marginBottom: 10 },
  price: { fontSize: 22, color: '#10B981', fontWeight: 'bold' },
  description: { marginTop: 20, color: '#4B5563', lineHeight: 22 },
  backButton: { backgroundColor: '#4F46E5', padding: 15, borderRadius: 10, alignItems: 'center' },
  backText: { color: '#fff', fontWeight: 'bold' },
});
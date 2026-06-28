import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const DUMMY_DATA = [
  { id: '1', title: '🚀 Sepatu Sneakers Keren', price: 'Rp 450.000' },
  { id: '2', title: '🎒 Tas Ransel Waterproof', price: 'Rp 250.000' },
  { id: '3', title: '⌚ Jam Tangan Digital', price: 'Rp 180.000' },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daftar Produk</Text>
      
      <FlatList
        data={DUMMY_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => router.push({ pathname: '/detail', params: { title: item.title, price: item.price } })}
          >
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F3F4F6', paddingTop: 50 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#111827' },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 12, marginBottom: 15, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 5, elevation: 2 },
  productTitle: { fontSize: 16, fontWeight: '600', color: '#374151' },
  productPrice: { fontSize: 14, color: '#4F46E5', marginTop: 5, fontWeight: 'bold' }
});
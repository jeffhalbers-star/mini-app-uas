 import { StyleSheet, Text, View, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function AboutScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tentang Aplikasi</Text>
      <Text style={styles.description}>
        Aplikasi ini dibuat menggunakan Expo Router dengan struktur minimal 4 halaman untuk memenuhi standar kompilasi APK.
      </Text>
      
      <View style={styles.buttonContainer}>
        <Button title="Kembali ke Home" color="#4CD964" onPress={() => router.back()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f9f9f9',
    padding: 20 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 15,
    color: '#222' 
  },
  description: { 
    fontSize: 15, 
    textAlign: 'center', 
    lineHeight: 22,
    marginBottom: 30,
    color: '#555' 
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 250
  }
});
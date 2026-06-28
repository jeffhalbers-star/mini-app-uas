import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🚀 MyApps</Text>
      <Text style={styles.subtitle}>Selamat Datang di Aplikasi Expo Pertama Anda</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => router.replace('/login')}>
        <Text style={styles.buttonText}>Mulai Sekarang</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#4F46E5', justifyContent: 'center', alignItems: 'center', padding: 20 },
  logo: { fontSize: 42, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#E0E7FF', textAlign: 'center', marginBottom: 40 },
  button: { backgroundColor: '#fff', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 30 },
  buttonText: { color: '#4F46E5', fontWeight: 'bold', fontSize: 16 },
});
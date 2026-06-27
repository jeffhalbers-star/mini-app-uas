import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.trim() === '') {
      Alert.alert('Error', 'Nama pengguna tidak boleh kosong!');
    } else {
      router.replace('/home');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan Username Anda"
        value={username}
        onChangeText={setUsername}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#F3F4F6' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30, color: '#1F2937', textAlign: 'center' },
  input: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 20, borderWidth: 1, borderColor: '#D1D5DB' },
  button: { backgroundColor: '#4F46E5', padding: 15, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
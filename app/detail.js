 import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function DetailScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail</Text>
      <Text style={styles.text}>Ini adalah halaman detail aplikasi.</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Kembali</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#F3F4F6" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 16, marginBottom: 20 },
  button: { backgroundColor: "#4F46E5", padding: 15, borderRadius: 10 },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
});
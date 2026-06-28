import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#4F46E5' }}>
      <Tabs.Screen 
        name="home" 
        options={{ 
          title: 'Beranda',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />
        }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{ 
          title: 'Tentang',
          tabBarIcon: ({ color }) => <Ionicons name="information-circle" size={24} color={color} />
        }} 
      />
    </Tabs>
  );
}
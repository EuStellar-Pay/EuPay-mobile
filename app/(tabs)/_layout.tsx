import { Tabs } from 'expo-router';
export default function TabLayout() {
  return (<Tabs screenOptions={{tabBarStyle:{backgroundColor:'#111827'},tabBarActiveTintColor:'#818cf8',headerStyle:{backgroundColor:'#0a0a0f'},headerTintColor:'#fff'}}><Tabs.Screen name="index" options={{title:'Home'}} /><Tabs.Screen name="streams" options={{title:'Streams'}} /></Tabs>);
}

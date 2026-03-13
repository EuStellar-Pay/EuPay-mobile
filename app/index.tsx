import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
export default function HomeScreen() {
  const [connected, setConnected] = useState(false);
  return (<View style={styles.container}><Text style={styles.logo}>EuPay</Text><Text style={styles.subtitle}>Payroll Streaming on Stellar</Text>{!connected ? <TouchableOpacity style={styles.button} onPress={() => setConnected(true)}><Text style={styles.buttonText}>Connect Wallet</Text></TouchableOpacity> : <Text style={styles.connected}>✓ Wallet Connected</Text>}</View>);
}
const styles = StyleSheet.create({ container:{flex:1,backgroundColor:'#0a0a0f',alignItems:'center',justifyContent:'center',padding:24}, logo:{fontSize:40,fontWeight:'bold',color:'#818cf8',marginBottom:8}, subtitle:{fontSize:16,color:'#9ca3af',marginBottom:40}, button:{backgroundColor:'#4f46e5',paddingHorizontal:32,paddingVertical:14,borderRadius:12}, buttonText:{color:'#fff',fontWeight:'600',fontSize:16}, connected:{color:'#34d399',fontSize:16,fontWeight:'600'} });

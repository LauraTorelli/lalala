import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.aa}>Laura Torelli 01-01</Text>
      <Text style={styles.abc}>Laura maravilhosa que mora em sumare</Text>
       <Text style={styles.ultimo}>Aluna Senai</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  abc: {
    flex: 1,
    backgroundColor: '#00FF00',
    alignItems: 'left',
    justifyContent: 'top',
  },
  aa: {
    flex: 1,
    border: '1px solid red',
    backgroundColor: '#00FF00',
    fontSize: '50px',
   
   
  },
  ultimo: {
    flex: 1,
    border: '1px solid red',
    backgroundColor: '#00FF00',
    
    marginTop: '100px',
  },
  
  
});
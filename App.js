import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView} from 'react-native';
import api from './src/service/api';

export default function App() {
  const [cep, setCep] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.Text}>Digite o cep desejado</Text>
        <TextInput 
        style={styles.input}
        placeholder="78065700"
        value={cep}
        onChangeText={(texto)=>setText(texto)}
        keyboardType="numeric"
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    marginTop:25,
    marginBottom:25,
    fontSize:30,
    fontWeight: 'bold',
  },
  input:{
    backgroundColor: '#FFF',
    borderWidth:1,
    borderColor: '#DDD',
    borderRadius: 5,
    width: '100%',
    padding: 10,
  }
});

import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView} from 'react-native';
import api from './src/service/api';

export default function App() {
  const [cep, setCep] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} backgroundColor={'#FFF'} />
      <View style={styles.Row}>    
        <View style={styles.cardContainer}>
          <Text style={styles.text}>Digite o cep desejado</Text>
          <TextInput 
          style={styles.input}
          placeholder="78065700"
          value={cep}
          onChangeText={(texto)=>setCep(texto)}
          keyboardType="numeric"
          />
        </View>
        <View style={[styles.container,styles.AreaBtn]}>
          <TouchableOpacity style={[styles.Botao,styles.buscar]}>
            <Text style={styles.botaoText} >Buscar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.Botao, styles.limpar]}>
            <Text style={styles.botaoText} >Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.Row}>
        <View style={[styles.cardContainer,styles.cardResltado]}>
          <Text style={styles.textResultado}>CEP:</Text>
          <Text style={styles.textResultado}>Logradouro:</Text>
          <Text style={styles.textResultado}>Bairro:</Text>
          <Text style={styles.textResultado}>Cidade:</Text>
          <Text style={styles.textResultado}>Estado:</Text>        
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDD',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  text:{
    marginBottom:25,
    fontSize:25,
    fontWeight: 'bold',
  },
  input:{
    backgroundColor: '#DDD',
    borderWidth:1,
    borderColor: '#DDD',
    borderRadius: 5,
    width: '90%',
    minWidth: '50%',
    padding: 10,
    fontSize :18,
  },
  cardContainer :{
    alignItems: 'center',
    justifyContent: 'center',
   backgroundColor: '#FFF',
   padding: 30,
   marginTop: 25,
   borderRadius: 10, 
   shadowColor : '#171717',
   shadowOpacity: 0.4,
   shadowOffset: {width: 2, height: 2},
   shadowRadius: 10,  
   elevation: 16, 
  },
  AreaBtn:{
    marginTop: 15,    
    flexDirection: 'row',     
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  Botao:{
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5, 
    shadowColor : '#000',
    shadowOpacity: 0.5,
    shadowOffset: {width: 5, height: 5},
    shadowRadius: 5,   
    elevation: 20,    
  },
  botaoText:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
  },
  buscar:{
    backgroundColor: '#0a7dcd',
  },
  limpar:{
    backgroundColor: '#FF0000'
  },
  cardResltado:{
    alignItems: 'flex-start',
  },
  Row:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textResultado: {
    fontSize: 18,
  }
});

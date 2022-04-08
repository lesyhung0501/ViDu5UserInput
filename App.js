import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native';
import { useState } from 'react';
import Content from './Content';

export default function App() {
  let [name, setName] = useState('');
  let [phone, setPhone] = useState('');
  let [flag, setFlag] = useState(false);

  function handleClick() {
    setFlag(!flag);
  }

  
  return (
    <View style={styles.container}>
      
      
      <TextInput
        style={{width: '200px', padding: '2px', marginBottom: '4px'}}
        placeholder='Enter the your name:'
        value={name}
        onChangeText={name => setName(name)}
      ></TextInput>

      <TextInput
        style={{width: '200px', padding: '2px', marginBottom: '4px'}}
        placeholder='Enter the your phone number:'
        value={phone}
        onChangeText={phone=>setPhone(phone)}
      ></TextInput>

      <Button 
        style={{width: '30px', display: 'inline-block'}}
        title='Render your result'
        onPress={handleClick}
      ></Button>

      {flag && <Content name={name} phone={phone}/>}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '8px'
  },
});

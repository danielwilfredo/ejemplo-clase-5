import React, { useState } from 'react';
import { View, StyleSheet, Alert} from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const LoginScreen = ({logueado, setLogueado}) => {

  //Estado de la app
  const [alias, setAlias] = useState('');
  const [clave, setClave] = useState('');
  let ip = `10.10.0.165`;
  const handleLogin = async () => {
    // Lógica de inicio de sesión
   
    let url=`http://${ip}/coffeeshop/api/services/admin/administrador.php?action=logIn`;

    const formData = new FormData();
    formData.append('alias', alias)
    formData.append('clave', clave)

    //Realizar la petición http 
    const fetchApi = await fetch(url, {
      method: 'POST',
      body: formData
    })
    
    const datos = await fetchApi.json();
    if(datos.status){
      setLogueado(!logueado)
    }
    else {
      console.log(datos);
      // Alert the user about the error
      Alert.alert('Error sesion', datos.error);
    }


  };

  
  const handleLogOut = async ()=>{
    const url = `http://${ip}/coffeeshop/api/services/admin/administrador.php?action=logOut`;
     //Realizar la petición http 
     const fetchApi = await fetch(url)
    const datos = await fetchApi.json();
    if(datos.status){
      setLogueado(false)
    }
    else {
      console.log(datos);
      // Alert the user about the error
      Alert.alert('Error sesion', datos.error);
    }


  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <TextInput
        label="Usuario"
        value={alias}
        onChangeText={setAlias}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        label="Contraseña"
        value={clave}
        onChangeText={setClave}
        style={styles.input}
        secureTextEntry
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Iniciar Sesión
      </Button>
      <Button mode="contained" onPress={handleLogOut} style={styles.button}>
        Cerrar Sesión
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#6200ee',
  },
  input: {
    marginBottom: 15,
    backgroundColor: 'white',
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#6200ee',
  },
});

export default LoginScreen;

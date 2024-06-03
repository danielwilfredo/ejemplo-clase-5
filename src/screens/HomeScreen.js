import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';

const HomeScreen = ({ logueado, setLogueado }) => {
  let ip = `10.10.0.165`;
  const url = `http://${ip}/coffeeshop/api/services/admin/administrador.php?action=logOut`;
  const handleLogOut = async ()=>{

     //Realizar la petición http 
     const fetchApi = await fetch(url, {
      method: 'POST'
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


  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>¡Bienvenido a la aplicación!</Text>

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
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6200ee',
    textAlign: 'center',
    margin: 20,
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#6200ee',
  },
});



export default HomeScreen;

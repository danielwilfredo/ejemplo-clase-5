// Utilidades de React Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

// Pantallas de navegación
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';

// Navegador Bottom Tabs Navigator
const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator>
        <Tab.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        title: 'Inicio',
        tabBarActiveTintColor: '#FFC300', // Color activo de la pestaña
        headerStyle: {
          backgroundColor: '#FFC300', // Color del header
        },
        headerTintColor: '#fff', // Color del texto en el header
        tabBarIcon: ({ color }) => ( // Función que define el ícono de la pestaña
          <Ionicons name="home" color={color} size={24} /> // `color` proviene de React Navigation
        ),
      }}
    />
   </Tab.Navigator>
  
  );
}

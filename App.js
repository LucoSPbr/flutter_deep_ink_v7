import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Header from './components/Header/index';
import HomeScreen from './screens/Home';
import SeasonScreen from './screens/Season';
import ListaCorridaScreen from './screens/ListaCorrida';
import DadosCorridaScreen from './screens/DadosCorrida';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{ 
            headerTitle: <Header />,
            headerStyle: {
              backgroundColor: '#fff159'
            }
          }}
        >
          <Stack.Screen name="Home" component={ HomeScreen } />
          <Stack.Screen name="Season" component={ SeasonScreen } />
          <Stack.Screen name="ListaCorrida" component={ ListaCorridaScreen } />
          <Stack.Screen name="DadosCorrida" component={ DadosCorridaScreen } />
         </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
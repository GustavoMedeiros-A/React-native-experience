import React from 'react';
import { StatusBar } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import Routes from './src/routes/routes';


// StatusBar é um componente usado para mostrar os indicadores como bateria, sinal de rede, notificação, etc. 

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#857a17" barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
  );
}

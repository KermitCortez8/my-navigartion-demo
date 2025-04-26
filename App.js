import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import AScreen from './screens/AScreen';
import BScreen from './screens/BScreen';
import CScreen from './screens/CScreen';

const Stack = createStackNavigator();

export default function App(){
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="A" component={AScreen} />
            <Stack.Screen name="B" component={BScreen} />
            <Stack.Screen name="C" component={CScreen} />
          </Stack.Navigator>
        </NavigationContainer>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
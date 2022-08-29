import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from './screens/onBoarding/OnBoarding';
import LoginScreen from './screens/loginScreen/LoginScreen';
import RegisterScreen from './screens/registerScreen/RegisterScreen';
import Dashboard from './screens/dashboard/Dashboard';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{
      flex: 1,
    }}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}
 initialRouteName="dashboard">
        <Stack.Screen name="dashboard" component={Dashboard} />

        <Stack.Screen name="test" component={OnBoarding} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />

</Stack.Navigator>
</NavigationContainer>
    </SafeAreaView>
  );
}


import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './src/screen/WelcomeScreen';
import RegistrationScreen from './src/screen/RegistrationScreen'
import RegistrationOTPScreen from './src/screen/RegistrationOTPScreen'
import LoginScreen from './src/screen/LoginScreen'
import HomeScreenMain from './src/screen/HomeScreenMain';
import { ContextProvider } from './src/context/AppContext';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          // initialRouteName='OTP'
        >
          <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name='Registration' component={RegistrationScreen} />
          <Stack.Screen name='OTP' component={RegistrationOTPScreen} />
          <Stack.Screen name='Home_Main' component={HomeScreenMain} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
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

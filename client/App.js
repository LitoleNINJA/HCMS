import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from "native-base";
import Login from './src/views/Login';
import SignIn from './src/views/SignIn';
import HomePage from './src/views/HomePage'; 
import ComplaintType from './src/views/ComplaintType';
import Complaint from './src/views/Complaint';
import Confirmation from './src/views/Confirmation';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen options={{
              headerShown: false
            }} name="Login" component={Login} />
            <Stack.Screen options={{
              headerShown: false
            }} name="SignIn" component={SignIn} />
            <Stack.Screen options={{
              headerShown: false
            }} name="HomePage" component={HomePage} />
            <Stack.Screen options={{
              headerShown: false
            }} name="ComplaintType" component={ComplaintType} />
            <Stack.Screen options={{
              headerShown: false
            }} name="Complaint" component={Complaint} />
            <Stack.Screen options={{
              headerShown: false
            }} name="Confirmation" component={Confirmation} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
  );
}

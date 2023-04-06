import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from "native-base";
import Login from './src/views/Login';
import SignIn from './src/views/SignIn';
import HomePage from './src/views/HomePage';
import AdminPage from './src/views/AdminPage';
import ComplaintType from './src/views/ComplaintType';
import Complaint from './src/views/Complaint';
import ComplaintDetails from './src/views/ComplaintDetails';
import Confirmation from './src/views/Confirmation';
import LeaveRequest from './src/views/LeaveRequest';
import Leave from './src/views/Leave';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const Stack = createNativeStackNavigator();

export default function App() {

  // TODO: put in env
  axios.defaults.baseURL = 'http://192.168.143.31:5000';

  return (
    <Provider store={store}>
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
            }} name="AdminPage" component={AdminPage} />
            <Stack.Screen options={{
              headerShown: false
            }} name="ComplaintType" component={ComplaintType} />
            <Stack.Screen options={{
              headerShown: false
            }} name="Complaint" component={Complaint} />
            <Stack.Screen options={{
              headerShown: false
            }} name="ComplaintDetails" component={ComplaintDetails} />
            <Stack.Screen options={{
              headerShown: false
            }} name="Confirmation" component={Confirmation} />
            <Stack.Screen options={{
              headerShown: false
            }} name="LeaveRequest" component={LeaveRequest} />
            <Stack.Screen options={{
              headerShown: false
            }} name="Leave" component={Leave} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

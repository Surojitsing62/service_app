import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabNav as TabNav} from './Apps/services/BottomTabNav';
import {StatusBar} from 'react-native';
import Otp from './Apps/screens/Otp';
import ForgotPassword from './Apps/screens/ForgotPassword';
import LoginPage from './Apps/screens/LoginPage';
import SignUpPages from './Apps/screens/SignUpPages';
import SearchingPages from './Apps/Pages/SearchingPages';

import Test_Screen from './Apps/screens/Test_Screen';

import ServicePages_Plumber from './Apps/Pages/PLUMBERS/ServicePages_Plumber';
import SubServicePlumberPages from './Apps/Pages/PLUMBERS/SubServicePlumberPages';
import AddItemPlumber from './Apps/Pages/PLUMBERS/AddItemPlumber';
import TotalPurchaseList from './Apps/Pages/TotalPurchaseList';

import ServicePages_Carpenter from './Apps/Pages/CARPENTERS/ServicePages_Carpenters';
import SubServiceCarpenterPages from './Apps/Pages/CARPENTERS/SubServiceCarpenterPages';
import AddItemCarpenter from './Apps/Pages/CARPENTERS/AddItemCarpenter';

const Stack = createStackNavigator();

function Home() {
  return (
    <>
      <StatusBar backgroundColor="black" />
      <TabNav />
    </>
  );
}

function App() {
  return (
    <>
      <StatusBar backgroundColor="black" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Test Screen"
            options={{headerShown: false}}
            component={Test_Screen}
          />
          <Stack.Screen
            name="Plumber_Service"
            options={{headerShown: false}}
            component={ServicePages_Plumber}
          />
          <Stack.Screen name="Plumbers" component={SubServicePlumberPages} />
          <Stack.Screen name="Plumber" component={AddItemPlumber} />
          <Stack.Screen name="Purchase" component={TotalPurchaseList} />
          {/* plumberend*********************** */}

          <Stack.Screen
            options={{headerShown: false}}
            name="Carpenter_Service"
            component={ServicePages_Carpenter}
          />
          <Stack.Screen
            name="Carpenters"
            component={SubServiceCarpenterPages}
          />
          <Stack.Screen name="Carpenter" component={AddItemCarpenter} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <SearchingPages /> */}
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            options={{headerShown: false}}
            component={LoginPage}
          />
          <Stack.Screen
            name="Home"
            options={{headerShown: false}}
            component={Home}
          />
          <Stack.Screen
            name="SignUp"
            options={{headerShown: false}}
            component={SignUpPages}
          />
          <Stack.Screen
            name="ForgotPassword"
            options={{headerShown: false}}
            component={ForgotPassword}
          />
          <Stack.Screen
            name="Otp"
            options={{headerShown: false}}
            component={Otp}
          />
        </Stack.Navigator>
      </NavigationContainer> */}
    </>
  );
}

export default App;

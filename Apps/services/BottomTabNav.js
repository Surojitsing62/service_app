import React, {Component} from 'react';
// import {Text, View, SafeAreaView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Rewards from '../screens/Rewards';
import Bookings from '../screens/Bookings';
import MainScreen from '../screens/MainScreen';
import UcSafe from '../screens/UcSafe';
import ProfileScreen from '../screens/ProfileScreen';

// import SearchingPages from '../../Apps/Pages/SearchingPages';
// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export class BottomTabNav extends Component {
  render() {
    return (
      <>
        <Tab.Navigator
          initialRouteName="Home"
          backBehavior="initialRoute"
          tabBarOptions={{
            activeTintColor: '#f7521b',
          }}>
          <Tab.Screen
            name="Home"
            initialRouteName="Home"
            component={MainScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Bookings"
            component={Bookings}
            options={{
              tabBarIcon: ({size, color}) => (
                <MaterialCommunityIcons
                  name="book-plus"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="UC Safe"
            component={UcSafe}
            options={{
              tabBarIcon: ({size, color}) => (
                <MaterialCommunityIcons
                  name="security"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Rewards"
            component={Rewards}
            options={{
              tabBarIcon: ({size, color}) => (
                <MaterialCommunityIcons
                  name="wallet-plus"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({size, color}) => (
                <MaterialCommunityIcons
                  name="account-circle"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </>
    );
  }
}

export default BottomTabNav;

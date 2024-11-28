import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import InfoScreen from './src/screens/InfoScreen';
import AlarmScreen from './src/screens/AlarmScreen';
import LoginScreen from './src/screens/LoginScreen';
import Registro from './src/screens/Registro';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NativeBaseProvider } from 'native-base'; 
import theme from './theme'; 
import ToggleDarkMode from './ToggleDarkMode'; 
import ProfileScreen from './src/screens/ProfileScreen';
import ConfigScreen from './src/screens/ConfigScreen';
import Competencias from './src/screens/Competencias';
import AntDesign from '@expo/vector-icons/AntDesign';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Details') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Info') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          } else if (route.name === 'Alarms') {
            iconName = focused ? 'alarm' : 'alarm-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }else if (route.name === 'Registro') {
            iconName = focused ? 'person-add' : 'person-add-outline';
          }else if (route.name === 'Config') {
            iconName = focused ? 'settings' : 'settings-outline';
          }else if (route.name == 'Competencias') {
            return <AntDesign name="book" size={size} color={color} />;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Details" component={DetailsScreen} />
      <Tab.Screen name="Info" component={InfoScreen} />
      <Tab.Screen name="Alarms" component={AlarmScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Registro" component={Registro} />
      <Tab.Screen name="Config" component={ConfigScreen} />
      <Tab.Screen name="Competencias" component={Competencias} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Registro"
            component={Registro}
            options={{ headerShown: true, title: 'Registro' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <ToggleDarkMode /> 
    </NativeBaseProvider>
  );
}


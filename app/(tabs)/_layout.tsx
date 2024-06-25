import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { Provider } from 'react-native-paper';
import { Image, StyleSheet, Platform , Easing , Animated} from 'react-native';

import HomeScreen from './index'; // Ensure correct path
import TabTwoScreen from './explore'; // Ensure correct path
import TabThreeScreen from './custom'

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
// import { Easing } from 'react-native-reanimated';

// Create the material bottom tab navigator
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const colorScheme = useColorScheme();



  return (
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            headerShown: false,
          }}

          style={styles.tab}
        >
          <Tab.Screen
            name="Index"
            component={HomeScreen}
            options={{
              title: 'Home',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
              ),
            }}

            
          />
          <Tab.Screen
            name="Packages"
            component={TabTwoScreen}
            options={{
              title: 'Packages',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'cube' : 'cube-outline'} color={color} />
              ),
            }}
          />
                    <Tab.Screen
            name="Settings"
            component={TabThreeScreen}
            options={{
              title: 'Settings',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'man' : 'man-outline'} color={color} />
              ),
            }}
          />

        </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  tab: {
    // flex: 1,
    // paddingTop: 50,
    backgroundColor: '#fff',
    // padding: 10,
  }
  });

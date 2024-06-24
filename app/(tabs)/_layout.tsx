import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { Provider } from 'react-native-paper';

import HomeScreen from './index'; // Ensure correct path
import TabTwoScreen from './explore'; // Ensure correct path
import TabThreeScreen from './custom'

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

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
            name="Explore"
            component={TabTwoScreen}
            options={{
              title: 'Explore',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
              ),
            }}
          />
                    <Tab.Screen
            name="Starter"
            component={TabThreeScreen}
            options={{
              title: 'Starter',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'time' : 'time-outline'} color={color} />
              ),
            }}
          />

        </Tab.Navigator>
  );
}

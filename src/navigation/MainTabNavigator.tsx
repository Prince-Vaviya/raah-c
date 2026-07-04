import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/DashboardScreen';
import AlertsScreen from '../screens/AlertsScreen';
import JourneyScreen from '../screens/JourneyScreen';
import CommandsScreen from '../screens/CommandsScreen';
import { LayoutDashboard, Map, Bell, User, Command } from 'lucide-react-native';

const Tab = createBottomTabNavigator();

// Placeholder screens for other tabs
const ProfileScreen = () => null;

export default function MainTabNavigator() {
  const [alertsCount, setAlertsCount] = useState<number | undefined>(3);
  const [commandsCount, setCommandsCount] = useState<number | undefined>(1);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#F1F5F9',
          height: 80,
          paddingBottom: 20,
          paddingTop: 10,
        },
        tabBarActiveTintColor: '#4285F4',
        tabBarInactiveTintColor: '#94A3B8',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginTop: 4,
        },
      }}
    >
      <Tab.Screen 
        name="Dashboard" 
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <LayoutDashboard size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Journey" 
        component={JourneyScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Map size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Alerts" 
        component={AlertsScreen}
        listeners={{
          tabPress: () => {
            setAlertsCount(undefined);
          },
        }}
        options={{
          tabBarBadge: alertsCount,
          tabBarBadgeStyle: {
            backgroundColor: '#EF4444',
            color: '#FFFFFF',
            fontSize: 10,
            minWidth: 16,
            height: 16,
            lineHeight: 16,
          },
          tabBarIcon: ({ color, size }) => (
            <Bell size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Commands" 
        component={CommandsScreen}
        listeners={{
          tabPress: () => {
            setCommandsCount(undefined);
          },
        }}
        options={{
          tabBarBadge: commandsCount,
          tabBarBadgeStyle: {
            backgroundColor: '#EF4444',
            color: '#FFFFFF',
            fontSize: 10,
            minWidth: 16,
            height: 16,
            lineHeight: 16,
          },
          tabBarIcon: ({ color, size }) => (
            <Command size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <User size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

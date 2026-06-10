import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#F4F1BB",
        tabBarStyle: {
          backgroundColor: "#114b5f",
        },
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="login"
        options={{
          title: "Login",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="prepare"
        options={{
          title: "Preparation",
          tabBarIcon: ({ color }) => (
            <IconSymbol
              size={28}
              name="exclamationmark.circle.fill"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="respond"
        options={{
          title: "Assistance",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="shield.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="recovery"
        options={{
          title: "Recovery",
          tabBarIcon: ({ color }) => (
            <IconSymbol
              size={28}
              name="paperplane.circle.fill"
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

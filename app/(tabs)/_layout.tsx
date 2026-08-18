import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
    return (
        <Tabs
        screenOptions={{ headerShown: false }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }}
            />

            <Tabs.Screen
                name="recipes"
                options={{
                    title: "Recipes",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="book" color={color} size={size} />
                    ),
                }}
            />

            <Tabs.Screen
                name="plan"
                options={{
                    title: "Plan",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="calendar" color={color} size={size} />
                    ),
                }}
            />

            <Tabs.Screen
                name="shopping"
                options={{
                    title: "Shopping List",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="cart" color={color} size={size} />
                    ),
                }}
            />
        </Tabs>
    );
}
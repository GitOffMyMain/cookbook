import { Tabs } from "expo-router";

import CustomMenuBar from "@/components/CustomMenuBar";
import IconLabelButton from "@/components/IconLabelButton";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{ headerShown: false }}
            tabBar={({ state, navigation }) => {
                const currentRoute = state.routes[state.index].name;

                return (
                    <CustomMenuBar>
                        <IconLabelButton
                            label="Home"
                            iconName="home"
                            color={currentRoute === "index" ? "#007AFF" : "#8e8e93"}
                            onPress={() => navigation.navigate("index")}
                            style={{flex: 1}}
                        />
                        <IconLabelButton
                            label="Recipes"
                            iconName="book"
                            color={currentRoute === "recipes" ? "#007AFF" : "#8e8e93"}
                            onPress={() => navigation.navigate("recipes")}
                            style={{flex: 1}}
                        />
                        <IconLabelButton
                            label="Plan"
                            iconName="calendar"
                            color={currentRoute === "plan" ? "#007AFF" : "#8e8e93"}
                            onPress={() => navigation.navigate("plan")}
                            style={{flex: 1}}
                        />
                        <IconLabelButton
                            label="Shopping List"
                            iconName="cart"
                            color={currentRoute === "shopping" ? "#007AFF" : "#8e8e93"}
                            onPress={() => navigation.navigate("shopping")}
                            style={{flex: 1}}
                        />
                    </CustomMenuBar>
                )
            }}
        >
            <Tabs.Screen
                name="index"
                options={{ title: "Home" }}
            />

            <Tabs.Screen
                name="recipes"
                options={{ title: "Recipes" }}
            />

            <Tabs.Screen
                name="plan"
                options={{ title: "Plan" }}
            />

            <Tabs.Screen
                name="shopping"
                options={{ title: "Shopping List" }}
            />
        </Tabs>
    );
}
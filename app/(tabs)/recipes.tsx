import { View, Text, ScrollView, Pressable } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

import { recipes, cuisineOptions } from "@/data/Recipes";
import RecipeCard from "@/components/RecipeCard";

export default function RecipesScreen() {
    const cuisineFilters = [
        { id: 0, name: "All" },
        ...cuisineOptions
    ];

    const [selectedCuisineId, setSelectedCuisineId] = useState(0);

    const filteredRecipes = recipes.filter(
        recipe =>
            selectedCuisineId === 0 ||
            recipe.cuisines.some(
                cuisine => cuisine.id === selectedCuisineId
            )
    );

    return (
        <SafeAreaView
            style={{ flex: 1 }}
            edges={["top"]}
        >
            <ScrollView
                style={{
                    flex: 1,
                }}
                contentContainerStyle={{
                    paddingHorizontal: 20
                }}
            >
                <Text
                    style={{
                        fontSize: 32,
                        fontWeight: "bold",
                        marginBottom: 20
                    }}
                >
                    My Recipes
                </Text>

                {/* Start filters section */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginBottom: 16 }}
                >
                    {cuisineFilters.map((cuisine) => (
                        <Pressable
                            key={cuisine.id}
                            onPress={() => setSelectedCuisineId(cuisine.id)}
                            style={{
                                paddingHorizontal: 15,
                                paddingVertical: 10,
                                marginHorizontal: 5,
                                borderRadius: 10,
                                borderWidth: 1,
                                backgroundColor:
                                    cuisine.id === selectedCuisineId
                                        ? "cyan"
                                        : "transparent"
                            }}
                        >
                            <Text>{cuisine.name}</Text>
                        </Pressable>
                    ))}
                </ScrollView>
                {/* End filters section */}

                {/* START - Display filtered recipes */}
                {filteredRecipes.map((recipe) => (
                    <View
                        key={recipe.id}
                        style={{
                            marginBottom: 16
                        }}
                    >
                        <RecipeCard
                            onPress={() => router.push(`/recipe/${recipe.id}`)}
                            dishName={recipe.dishName}
                            cuisines={recipe.cuisines}
                            spiceLevel={recipe.spiceLevel}
                            cookingTimeMinutes={recipe.cookingTimeMinutes}
                        />
                    </View>
                ))}
                {/* END - Display filtered recipes */}
            </ScrollView>

            <Pressable
                onPress={() => router.push("/recipe/add")}
                style={{
                    position: "absolute",
                    right: 20,
                    bottom: 20,
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: 15,
                    backgroundColor: "cyan"
                }}
            >
                <Ionicons
                    name="add"
                    size={28}
                    color="black"
                />
            </Pressable>
        </SafeAreaView>
    );
}
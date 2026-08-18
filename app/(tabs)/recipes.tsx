import { View, Text, ScrollView, Pressable } from "react-native";
import { useState} from "react";
import { router } from "expo-router";
import { recipes, cuisineOptions } from "@/data/Recipes";
import RecipeCard from "@/components/RecipeCard";
import {SafeAreaView} from "react-native-safe-area-context";

export default function RecipesScreen() {
    const cuisineFilters = ["All", ...cuisineOptions]
    const [selectedCuisine, setSelectedCuisine] = useState("All");
    const filteredRecipes = recipes.filter(recipe => selectedCuisine === "All" || recipe.cuisines.some(cuisine => cuisine.name === selectedCuisine));

    return (
        <SafeAreaView style={{ flex: 1 }}>
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
                    }}>
                    My Recipes
                </Text>

                {/* Start filters section */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{marginBottom: 8}}
                >
                    {cuisineFilters.map((cuisine) => (
                        <Pressable
                            onPress={() => setSelectedCuisine(cuisine)}
                            key={cuisine}
                            style={{
                                paddingHorizontal: 15,
                                paddingVertical: 10,
                                marginHorizontal: 5,
                                borderRadius: 10,
                                borderWidth: 1,
                                backgroundColor: cuisine === selectedCuisine ? "cyan" : "transparent"
                            }}
                        >
                            <Text>{cuisine}</Text>
                        </Pressable>
                    ))}
                </ScrollView>
                {/* End filters section */}

                {/* START - Display filtered recipes */}
                {filteredRecipes.map((recipe) => (
                    <View
                        key={recipe.id}
                        style={{marginVertical: 8}}
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
        </SafeAreaView>
    );
}
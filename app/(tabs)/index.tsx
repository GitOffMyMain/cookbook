import { Text, View, ScrollView, TextInput } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/data/Recipes";

export default function HomeScreen() {
    return (
        <SafeAreaView
            style={{ flex: 1 }}
            edges={[ "top" ]}
        >
            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={{ paddingHorizontal: 20 }}
            >
                <Text
                    style={{
                        fontSize: 32,
                        fontWeight: "bold",
                        marginBottom: 20
                    }}>
                    My Cookbook
                </Text>

                <TextInput
                    placeholder="Search recipes..."
                    placeholderTextColor="#888"
                    style={{
                        borderWidth: 1,
                        borderColor: "#ccc",
                        borderRadius: 12,
                        fontSize: 16,
                        paddingHorizontal: 14,
                        paddingVertical: 12,
                        marginBottom: 28,
                    }}
                />

                {/* Start Ideas for you section */}
                <Text
                    style={{
                        fontSize: 22,
                        fontWeight: "600",
                        marginBottom: 12,
                    }}
                >
                    Ideas for you
                </Text>

                {/* Ideas for you cards */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {recipes.map((recipe) => (
                        <View
                            key={recipe.id}
                            style={{
                                marginRight: 16
                            }}
                        >
                            <RecipeCard
                                onPress={() => router.push(`/recipe/${recipe.id}`)}
                                dishName={recipe.dishName}
                                cuisines={recipe.cuisines}
                                spiceLevel={recipe.spiceLevel}
                                cookingTimeMinutes={recipe.cookingTimeMinutes}
                                width={280}
                            />
                        </View>
                    ))}
                </ScrollView>
                {/* End Ideas for you section */}


                {/* Start Recently Added section */}
                <Text
                    style={{
                        fontSize: 22,
                        fontWeight: "600",
                        marginTop: 28,
                        marginBottom: 12,
                    }}
                >
                    Recently added
                </Text>

                {/* Start Recently Added Cards */}
                {recipes.map((recipe) => (
                    <View
                        key={recipe.id}
                        style={{
                            marginBottom: 16,
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
                {/* End Recently Added section */}
            </ScrollView>
        </SafeAreaView>
    );
}
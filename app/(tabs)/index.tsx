import { Text, View, ScrollView, TextInput } from "react-native";
import RecipeCard from "@/components/RecipeCard";
import type { Recipe } from "@/types/Recipe";

export default function HomeScreen() {
    const recipes: Recipe[] = [
         {
            dishName: "Coconut Chicken Rice",
            cuisine: "Ugandan",
            spiceLevel: 3,
            cookingTime: 45,
        },

        {
            dishName: "Coconut chicken soup",
            cuisine: "Ugandan",
            spiceLevel: 0,
            cookingTime: 15,
        },

        {
            dishName: "Udon",
            cuisine: "Asian",
            spiceLevel: 2,
            cookingTime: 20,
        }
    ]

    return (
        <ScrollView
            style={{
                flex: 1,
            }}
            contentContainerStyle={{
                padding: 20
            }}
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

            <Text
                style={{
                    fontSize: 22,
                    fontWeight: "600",
                    marginBottom: 12,
                }}
            >
                Ideas for you
            </Text>

            {/* Start Ideas for you Card */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {recipes.map((recipe) => (
                    <View
                        key={recipe.dishName}
                        style={{
                            marginRight: 16
                        }}
                    >
                        <RecipeCard
                            dishName={recipe.dishName}
                            cuisine={recipe.cuisine}
                            spiceLevel={recipe.spiceLevel}
                            cookingTime={recipe.cookingTime}
                            width={280}
                        />
                    </View>
                ))}
            </ScrollView>
            {/* End Ideas for you Card */}

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
        </ScrollView>
    );
}
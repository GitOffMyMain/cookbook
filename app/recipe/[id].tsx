import {View, Text, ScrollView } from "react-native";
import {Image} from "expo-image";
import { useLocalSearchParams } from "expo-router";

import RecipeMetadata from "@/components/RecipeMetadata";
import {recipes} from "@/data/Recipes";
import BackButton from "@/components/BackButton";

export default function RecipeDetails() {
    const { id } = useLocalSearchParams();
    const recipe = recipes.find(recipe => recipe.id === Number(id));

    if (!recipe) {
        return <Text>Recipe not found</Text>;
    }

    return (
        <View
            style={{ flex: 1 }}
        >
            <Image
                source={require("@/assets/images/coconut_rice.jpg")}
                style={{width: "100%", height: 220}}
            />

            <View
                style={{
                    paddingHorizontal: 20,
                    paddingVertical: 20
            }}>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "bold",
                    }}>
                    {recipe.dishName}
                </Text>
                <RecipeMetadata
                    cuisines={recipe.cuisines}
                    spiceLevel={recipe.spiceLevel}
                    cookingTimeMinutes={recipe.cookingTimeMinutes}
                />
            </View>

            <ScrollView
                style={{
                    flex: 1,
                    marginBottom: 15
                }}
                contentContainerStyle={{
                    paddingHorizontal: 20,
            }}>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "bold",
                        marginBottom: 12
                    }}
                >
                    Ingredients
                </Text>

                {recipe.ingredients.map((ingredient) => (
                    <Text
                        key={ ingredient.id }
                        style={{
                            fontSize: 14,
                            marginBottom: 2
                        }}
                    >
                        {"• "}
                        <Text style={{ fontWeight: "600" }}>
                            { ingredient.quantity !== undefined ? ingredient.quantity : "" }
                            { ingredient.unit !== undefined ? ingredient.unit : "" }
                        </Text>
                        { ingredient.unit !== undefined ? " " : "" }
                        { ingredient.name }
                    </Text>
                ))}

                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "bold",
                        marginTop: 28,
                        marginBottom: 12
                }}>
                    Instructions
                </Text>

                {recipe.instructions.map((instruction) => (
                    <Text
                        key={instruction.id}
                        style={{
                            fontSize: 14,
                            marginBottom: 6
                        }}
                    >
                        <Text style={{ fontWeight: "600" }}>
                            {instruction.position}. { " " }
                        </Text>
                        {instruction.details}
                    </Text>
                ))}
            </ScrollView>

            <BackButton />
        </View>
    )
}
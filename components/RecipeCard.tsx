import {View, Text, Pressable} from "react-native";

import RecipeMetadata from "@/components/RecipeMetadata";
import type { SpiceLevelValue } from "@/types/SpiceLevel";
import type { Cuisine } from "@/types/Cuisine";


type RecipeCardProps = {
    onPress?: () => void;
    dishName: string;
    cuisines: Cuisine[];
    spiceLevel: SpiceLevelValue;
    cookingTimeMinutes: number;
    width?: number;
};

export default function RecipeCard({onPress, dishName, cuisines, spiceLevel, cookingTimeMinutes, width }: RecipeCardProps ) {
    return (
        <Pressable
            onPress={onPress}
            style={{
                borderWidth: 1,
                borderColor: "#ddd",
                borderRadius: 16,
                padding: 14,
                width,
            }}>

            <View
                style={{
                    height: 140,
                    backgroundColor: "#eee",
                    borderRadius: 12,
                    marginBottom: 12,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <Text>Recipe photo</Text>
            </View>

            <Text
                style={{
                    fontSize: 18,
                    fontWeight: "600",
                    marginBottom: 4,
                }}>
                { dishName }
            </Text>

            <RecipeMetadata
                cuisines={cuisines}
                spiceLevel={spiceLevel}
                cookingTimeMinutes={cookingTimeMinutes}
            />
        </Pressable>
    );
}
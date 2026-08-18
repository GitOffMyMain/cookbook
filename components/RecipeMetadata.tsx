import { View, Text } from "react-native";

import SpiceLevel from "@/components/SpiceLevel";
import formatCookingTime from "@/utils/formatCookingTime";
import type { SpiceLevelValue } from "@/types/SpiceLevel";
import type { Cuisine } from "@/types/Cuisine";

type RecipeMetadataProps = {
    cuisines: Cuisine[];
    spiceLevel: SpiceLevelValue;
    cookingTimeMinutes: number;
}

export default function RecipeMetadata({ cuisines, spiceLevel, cookingTimeMinutes }: RecipeMetadataProps) {
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
            }}
        >
            <Text style={{
                fontSize: 14,
                color: "#777",
            }}>
                { cuisines.map((cuisine) => cuisine.name).join(" · ") } ·
            </Text>
            <SpiceLevel selectedLevel={spiceLevel}/>
            <Text style={{
                fontSize: 14,
                color: "#777",
            }}> · { formatCookingTime(cookingTimeMinutes) }
            </Text>
        </View>
    )
}
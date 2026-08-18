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
        <View>
            <Text style={{ fontSize: 14, color: "#777", marginBottom: 6 }}>
                { cuisines.map((cuisine) => cuisine.name).join(" · ") }
                { " · " }
                { formatCookingTime(cookingTimeMinutes) }
            </Text>
            <SpiceLevel selectedLevel={spiceLevel}/>
        </View>
    )
}
import { View, Text } from "react-native";

import SpiceLevel from "@/components/SpiceLevel";
import type { SpiceLevelValue } from "@/types/SpiceLevel";

type RecipeMetadataProps = {
    cuisine: string;
    spiceLevel: SpiceLevelValue;
    cookingTime: number;
}

export default function RecipeMetadata({ cuisine, spiceLevel, cookingTime }: RecipeMetadataProps) {
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
                { cuisine } ·
            </Text>
            <SpiceLevel selectedLevel={spiceLevel}/>
            <Text style={{
                fontSize: 14,
                color: "#777",
            }}> · { cookingTime } min
            </Text>
        </View>
    )
}
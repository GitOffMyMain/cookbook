import { View, Text } from "react-native";
import SpiceLevel from "@/components/SpiceLevel";


type RecipeCardProps = {
    dishName: string;
    cuisine: string;
    spiceLevel: 0 | 1 | 2 | 3 | 4 | 5;
    cookingTime: number;
    width?: number;
};

export default function RecipeCard({ dishName, cuisine, spiceLevel, cookingTime, width }: RecipeCardProps ) {
    return (
        <View
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

            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}>
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
        </View>
    );
}
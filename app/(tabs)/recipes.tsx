import { View, Text } from "react-native";

export default function RecipesScreen() {
    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Text style={{ fontSize: 24 }}
            >
                Recipes
            </Text>
        </View>
    );
}
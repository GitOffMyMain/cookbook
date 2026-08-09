import { Text, View, TextInput } from "react-native";
import RecipeCard from "@/components/RecipeCard";

export default function HomeScreen() {
    return (
        <View
            style={{
                flex: 1,
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
                    fontWeight: 600,
                    marginBottom: 12,
                }}
            >
                Ideas for you
            </Text>

            {/* Start Ideas for you Card */}
            <RecipeCard
                dishName="Coconut Chicken Rice"
                cuisine="Ugandan"
                spiceLevel={3}
                cookingTime={45}
            />
            {/* End Ideas for you Card */}

            <Text
                style={{
                    fontSize: 22,
                    fontWeight: 600,
                    marginTop: 28,
                    marginBottom: 12,
                }}
            >
                Recently added
            </Text>
        </View>
    );
}
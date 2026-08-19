import { ScrollView, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import BackButton from "@/components/BackButton";

export default function AddRecipe() {
    const [ recipeName, setRecipeName ] = useState("");

    return (
        <SafeAreaView
            style={{ flex: 1 }}
            edges={[ "top" ]}
        >
            <ScrollView
                contentContainerStyle={{ padding: 10 }}
            >
                 <Text>
                    Add new recipe
                </Text>
                <TextInput
                    placeholder="Recipe name"
                    placeholderTextColor="#888"
                    value={recipeName}
                    onChangeText={setRecipeName}
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
            </ScrollView>
            <BackButton />
        </SafeAreaView>
    );
}
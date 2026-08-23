import { ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { router } from "expo-router";

import CustomMenuBar from "@/components/CustomMenuBar";
import IconLabelButton from "@/components/IconLabelButton";

export default function AddRecipe() {
    const [ recipeName, setRecipeName ] = useState("");
    const [ hours, setHours ] = useState("");
    const [ minutes, setMinutes ] = useState("");

    const isRecipeNameValid = recipeName.trim().length > 0;

    const parsedHours = hours === "" ? 0 : Number(hours);
    const parsedMinutes = Number(minutes);
    const isTimeValid =
        Number.isInteger(parsedHours) &&
        Number.isInteger(parsedMinutes) &&
        parsedHours >= 0 &&
        parsedMinutes > 0;

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

                <Text>Cooking time</Text>
                <View style={{ flexDirection: "row" }}>
                    <TextInput
                        keyboardType="number-pad"
                        placeholder="Hours"
                        placeholderTextColor="#888"
                        value={hours}
                        onChangeText={setHours}
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            borderColor: "#ccc",
                            borderRadius: 12,
                            fontSize: 16,
                            paddingHorizontal: 14,
                            paddingVertical: 12,
                            marginRight: 10,
                        }}
                    />
                    <TextInput
                        keyboardType="number-pad"
                        placeholder="Minutes"
                        placeholderTextColor="#888"
                        value={minutes}
                        onChangeText={setMinutes}
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            borderColor: "#ccc",
                            borderRadius: 12,
                            fontSize: 16,
                            paddingHorizontal: 14,
                            paddingVertical: 12,
                        }}
                    />
                </View>
            </ScrollView>
            <CustomMenuBar>
                <IconLabelButton
                    label="Back"
                    iconName="return-up-back"
                    color="#8e8e93"
                    onPress={() => router.back()}
                    style={{ flex: 1 }}
                />
                <IconLabelButton
                    label="Save"
                    iconName="save"
                    color="#007AFF"
                    onPress={() => router.back()}
                    style={{ flex: 1 }}
                />
            </CustomMenuBar>
        </SafeAreaView>
    );
}
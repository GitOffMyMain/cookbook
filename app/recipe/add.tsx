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
    const [ submitted, setSubmitted ] = useState(false);
    const [ servings, setServings ] = useState("");

    const parsedHours = hours === "" ? 0 : Number(hours);
    const parsedMinutes = minutes === "" ? 0 : Number(minutes);
    const parsedServings = Number(servings);

    const isRecipeNameValid = recipeName.trim().length > 0;
    const isHoursValid = Number.isInteger(parsedHours) && parsedHours >= 0;
    const isMinutesValid = Number.isInteger(parsedMinutes) && parsedMinutes >= 0;
    const isCookingTimeOverZero = parsedHours * 60 + parsedMinutes > 0;
    const isCookingTimeValid = isHoursValid && isMinutesValid && isCookingTimeOverZero;
    const isServingsValid = Number.isInteger(parsedServings) && parsedServings > 0;

    function handleSubmit() {
        setSubmitted(true);

        if (!isRecipeNameValid || !isCookingTimeValid || !isServingsValid) {
            return;
        }


    }

    return (
        <SafeAreaView
            style={{ flex: 1 }}
            edges={[ "top" ]}
        >
            <ScrollView
                contentContainerStyle={{ padding: 10 }}
            >
                 <Text
                     style={{
                         fontSize: 32,
                         fontWeight: "bold",
                         marginBottom: 28,
                     }}
                 >
                    Add new recipe
                </Text>

                <TextInput
                    placeholder="Recipe name"
                    placeholderTextColor="#888"
                    value={recipeName}
                    onChangeText={setRecipeName}
                    style={{
                        borderWidth: 1,
                        borderColor: submitted && !isRecipeNameValid ? "#dc2626" : "#ccc",
                        borderRadius: 12,
                        fontSize: 16,
                        paddingHorizontal: 14,
                        paddingVertical: 12,
                        marginBottom: 15,
                    }}
                />

                <View
                    style={{ marginBottom: 15 }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            marginBottom: 5,
                        }}
                    >
                        Cooking time
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                        }}
                    >
                        <TextInput
                            keyboardType="number-pad"
                            placeholder="Hours"
                            placeholderTextColor="#888"
                            value={hours}
                            onChangeText={setHours}
                            style={{
                                flex: 1,
                                borderWidth: 1,
                                borderColor: submitted && (!isHoursValid || !isCookingTimeOverZero) ? "#dc2626" : "#ccc",
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
                                borderColor: submitted && (!isMinutesValid || !isCookingTimeOverZero) ? "#dc2626" : "#ccc",
                                borderRadius: 12,
                                fontSize: 16,
                                paddingHorizontal: 14,
                                paddingVertical: 12,
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 15 }}>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            marginBottom: 5,
                        }}
                    >
                        Servings
                    </Text>
                    <TextInput
                        keyboardType="numeric"
                        placeholder="Number of servings"
                        placeholderTextColor="#888"
                        value={servings}
                        onChangeText={setServings}
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            borderColor: submitted && !isServingsValid ? "#dc2626" : "#ccc",
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
                    onPress={handleSubmit}
                    style={{ flex: 1 }}
                />
            </CustomMenuBar>
        </SafeAreaView>
    );
}
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { router } from "expo-router";

import CustomMenuBar from "@/components/CustomMenuBar";
import IconLabelButton from "@/components/IconLabelButton";
import FormTextInput from "@/components/FormTextInput";

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

                <FormTextInput
                    placeholder="Recipe name"
                    value={recipeName}
                    onChangeText={setRecipeName}
                    hasError={submitted && !isRecipeNameValid}
                    style={{
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
                        <FormTextInput
                            keyboardType="number-pad"
                            placeholder="Hours"
                            value={hours}
                            onChangeText={setHours}
                            hasError={submitted && (!isHoursValid || !isCookingTimeOverZero)}
                            style={{
                                flex: 1,
                                marginRight: 10,
                            }}
                        />

                        <FormTextInput
                            keyboardType="number-pad"
                            placeholder="Minutes"
                            value={minutes}
                            onChangeText={setMinutes}
                            hasError={submitted && (!isMinutesValid || !isCookingTimeOverZero)}
                            style={{
                                flex: 1,
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

                    <FormTextInput
                        keyboardType="number-pad"
                        placeholder="Number of servings"
                        value={servings}
                        onChangeText={setServings}
                        hasError={submitted && !isServingsValid}
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
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import CustomMenuBar from "@/components/CustomMenuBar";
import IconLabelButton from "@/components/IconLabelButton";
import FormTextInput from "@/components/FormTextInput";
import SpiceLevel from "@/components/SpiceLevel";

import useAddRecipeForm from "@/hooks/useAddRecipeForm";

export default function AddRecipe() {
    const form = useAddRecipeForm();

    return (
        <SafeAreaView
            style={{ flex: 1 }}
            edges={[ "top" ]}
        >
            <ScrollView
                contentContainerStyle={{ padding: 10 }}
            >
                { /* Page title */ }
                 <Text
                     style={{
                         fontSize: 32,
                         fontWeight: "bold",
                         marginBottom: 28,
                     }}
                 >
                    Add new recipe
                </Text>

                { /* Recipe name text input */ }
                <FormTextInput
                    placeholder="Recipe name"
                    value={form.recipeName}
                    onChangeText={form.setRecipeName}
                    hasError={form.submitted && !form.isRecipeNameValid}
                    style={{
                        marginBottom: 15,
                    }}
                />

                { /* Cooking time input - contains 2 text inputs, one for hours and one for minutes */ }
                <View
                    style={{ marginBottom: 15 }}
                >
                    { /* Cooking time: section title */ }
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
                        { /* Cooking time: hours text input */ }
                        <FormTextInput
                            keyboardType="number-pad"
                            placeholder="Hours"
                            value={form.hours}
                            onChangeText={form.setHours}
                            hasError={form.submitted && (!form.isHoursValid || !form.isCookingTimeOverZero)}
                            style={{
                                flex: 1,
                                marginRight: 10,
                            }}
                        />

                        { /* Cooking time: minutes text input */ }
                        <FormTextInput
                            keyboardType="number-pad"
                            placeholder="Minutes"
                            value={form.minutes}
                            onChangeText={form.setMinutes}
                            hasError={form.submitted && (!form.isMinutesValid || !form.isCookingTimeOverZero)}
                            style={{
                                flex: 1,
                            }}
                        />
                    </View>
                </View>

                { /* Number of servings input */ }
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
                        value={form.servings}
                        onChangeText={form.setServings}
                        hasError={form.submitted && !form.isServingsValid}
                    />
                </View>

                { /* Set spice level */ }
                <View style={{ marginBottom: 15 }}>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            marginBottom: 5,
                        }}
                    >
                        Spice level
                    </Text>
                    <SpiceLevel
                        selectedLevel={form.spiceLevel}
                        iconSize={24}
                        onChange={form.setSpiceLevel}
                    />
                </View>
                { /*  */ }
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
                    onPress={form.handleSubmit}
                    style={{ flex: 1 }}
                />
            </CustomMenuBar>
        </SafeAreaView>
    );
}
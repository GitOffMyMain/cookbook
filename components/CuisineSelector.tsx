import type { Cuisine } from "@/types/Cuisine";
import IconLabelButton from "@/components/IconLabelButton";
import FormTextInput from "@/components/FormTextInput";

import {
    KeyboardAvoidingView,
    Modal,
    Pressable,
    Text,
    View,
    ScrollView,
    useWindowDimensions,
    Platform
} from "react-native";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

type CuisineSelectorProps = {
    cuisines: Cuisine[];
    selectedCuisines: Cuisine[];
    searchText: string;
    onSearchTextChange: (text: string) => void;
    onSelectCuisine: (cuisine: Cuisine) => void;
    onRemoveCuisine: (cuisine: Cuisine) => void;
}

export default function CuisineSelector({
    cuisines,
    selectedCuisines,
    searchText,
    onSearchTextChange,
    onSelectCuisine,
    onRemoveCuisine
} : CuisineSelectorProps) {
    const [isOpen, setIsOpen] = useState(false);
    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;
    const modalMaxHeight = isLandscape ? height * 0.5 : height * 0.35;

    const filteredCuisines = cuisines.filter((cuisine) =>
        cuisine.name.toLowerCase().startsWith(searchText.toLowerCase())
    );

    return (
        <>
            <Pressable
                onPress={() => setIsOpen(true)}
                style={{
                    minHeight: 52,
                    borderWidth: 1,
                    borderColor: "#ccc",
                    borderRadius: 12,
                    paddingHorizontal: 14,
                    paddingVertical: 10,

                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: 8,
                        flex: 1,
                    }}
                >
                    {selectedCuisines.length === 0 ? (
                        <Text style={{color: "#888", fontSize: 16}}>
                            Select cuisines
                        </Text>
                    ) : (
                        selectedCuisines.map((cuisine) => (
                            <Text key={cuisine.id}>
                                {cuisine.name}
                            </Text>
                        ))
                    )}
                </View>

                <Ionicons
                    name="chevron-forward"
                    size={20}
                    color="#8e8e93"/>
            </Pressable>

            { /* Modal sheet to display the cuisines */ }
            <Modal
                visible={isOpen}
                animationType="slide"
                transparent={true}
            >
                { /* Gray background overlay */ }
                <KeyboardAvoidingView
                    style={{
                        flex: 1,
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        justifyContent: "flex-end",
                    }}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    { /* Modal content - List of cuisines */ }
                    <View
                        style={{
                            backgroundColor: "#FFFFFF",
                            borderTopLeftRadius: 24,
                            borderTopRightRadius: 24,
                            padding: 20,
                            minHeight: modalMaxHeight,
                        }}
                    >
                        { /* Search input */ }
                        <FormTextInput
                            placeholder="Search cuisine"
                            value={searchText}
                            onChangeText={onSearchTextChange}
                            style={{ marginBottom: 12 }}
                        />

                        { /* List of cuisines */ }
                        <ScrollView style={{ flex: 1 }}>
                            {filteredCuisines.map((cuisine) => {
                                const isSelected = selectedCuisines.some(
                                    selectedCuisine => selectedCuisine.id === cuisine.id
                                );

                                return (
                                    <Pressable
                                        key={cuisine.id}
                                        onPress={() => {
                                            if (isSelected) {
                                                onRemoveCuisine(cuisine);
                                            } else {
                                                onSelectCuisine(cuisine);
                                            }
                                        }}
                                        style={{
                                            paddingVertical: 12,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <Text style={{fontSize: 16}}>
                                            {cuisine.name}
                                        </Text>
                                        {isSelected && (
                                            <Ionicons name="checkmark" size={20} color="#007AFF" />
                                        )}
                                    </Pressable>
                                );
                            })}
                        </ScrollView>

                        <IconLabelButton
                            label="Done"
                            iconName="checkmark"
                            color="#007AFF"
                            onPress={() => setIsOpen(false)}
                        />
                    </View>
                </KeyboardAvoidingView>
            </Modal>
        </>
    );
}
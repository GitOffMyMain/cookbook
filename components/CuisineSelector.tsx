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
    onAddCuisine?: (name: string) => void;
    onEditCuisine?: (cuisine: Cuisine) => void;
    onDeleteCuisine?: (cuisine: Cuisine) => void;
}

export default function CuisineSelector({
    cuisines,
    selectedCuisines,
    searchText,
    onSearchTextChange,
    onSelectCuisine,
    onRemoveCuisine,
    onAddCuisine,
    onEditCuisine,
    onDeleteCuisine
} : CuisineSelectorProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;
    const modalHeight = isLandscape ? height * 0.5 : height * 0.35;

    const filteredCuisines = cuisines.filter((cuisine) =>
        cuisine.name.toLowerCase().startsWith(searchText.toLowerCase())
    );

    const cuisineAlreadyExists = cuisines.some((cuisine) =>
        cuisine.name.toLowerCase() === searchText.trim().toLowerCase()
    );

    return (
        <>
            { /* Cuisine main pressable field that contains the modal and the selected cuisine pills */ }
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
                        marginRight: 10,
                    }}
                >
                    {selectedCuisines.length === 0 ? (
                        <Text style={{color: "#888", fontSize: 16}}>
                            Select cuisines
                        </Text>
                    ) : (
                        selectedCuisines.map((cuisine) => (
                            <View
                                key={cuisine.id}
                                style={{
                                    backgroundColor: "#E5E5EA",
                                    borderRadius: 999,
                                    paddingHorizontal: 10,
                                    paddingVertical: 5,
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 14,
                                        color: "#3A3A3C",
                                    }}
                                >
                                    {cuisine.name}
                                </Text>
                            </View>
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
                            height: modalHeight,
                        }}
                    >


                        { /* List of cuisines */ }
                        <ScrollView
                            style={{ flex: 1 }}
                            keyboardShouldPersistTaps="always"
                            keyboardDismissMode="none"
                        >
                            { /* Search input + Edit Mode row*/ }
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 10,
                                    marginBottom: 12
                                }}
                            >
                                { /* Search input */ }
                                <FormTextInput
                                    placeholder="Search cuisine"
                                    value={searchText}
                                    onChangeText={onSearchTextChange}
                                    style={{ flex: 1 }}
                                />

                                <IconLabelButton
                                    iconName={isEditing ? "checkmark" : "create-outline"}
                                    color="#007AFF"
                                    onPress={() => setIsEditing(current => !current)}
                                />
                            </View>

                            { /* Rendering the cuisines as pressable buttons */ }
                            {filteredCuisines.map((cuisine) => {
                                const isSelected = selectedCuisines.some(
                                    selectedCuisine => selectedCuisine.id === cuisine.id
                                );

                                return (
                                    <Pressable
                                        key={cuisine.id}
                                        onPress={() => {
                                            if (isEditing) {
                                                return;
                                            }

                                            if (isSelected) {
                                                onRemoveCuisine(cuisine);
                                            } else {
                                                onSelectCuisine(cuisine);
                                            }
                                        }}
                                        style={{
                                            minHeight: 48,
                                            marginVertical: 2,
                                            paddingHorizontal: 8,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            borderRadius: 8,
                                            backgroundColor: isSelected ? '#F2F2F7' : 'transparent',
                                        }}
                                    >
                                        <Text style={{fontSize: 16}}>
                                            {cuisine.name}
                                        </Text>
                                        {!isEditing && isSelected && (
                                            <Ionicons name="checkmark" size={24} color="#007AFF" />
                                        )}
                                        {isEditing && (
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    gap: 8
                                                }}
                                            >
                                                <Pressable onPress={() => onEditCuisine?.(cuisine)}>
                                                    <Ionicons name="create-outline" size={24} color="#007AFF" />
                                                </Pressable>

                                                <Pressable onPress={() => onDeleteCuisine?.(cuisine)}>
                                                    <Ionicons name="trash" size={24} color="#FF3B30" />
                                                </Pressable>
                                            </View>
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
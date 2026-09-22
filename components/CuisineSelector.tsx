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
                                        }: CuisineSelectorProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const [containerWidth, setContainerWidth] = useState(0);

    const [pillWidths, setPillWidths] = useState<Record<number, number>>({});

    const { width, height } = useWindowDimensions();

    const isLandscape = width > height;

    const modalHeight =
        isLandscape
            ? height * 0.5
            : height * 0.35;

    const pillGap = 8;

    /*
     * Fixed width reserved for the "+X more" pill.
     *
     * Because the width is known in advance, we can calculate whether
     * another cuisine pill can fit before rendering it.
     */
    const moreCuisinesPillWidth = 76;

    const normalizedSearch = searchText
        .trim()
        .toLowerCase();

    const filteredCuisines = cuisines.filter((cuisine) =>
        cuisine.name
            .toLowerCase()
            .startsWith(normalizedSearch)
    );

    function handleModalClose() {
        setIsEditing(false);
        onSearchTextChange("");
        setIsOpen(false);
    }


    /*
     * Calculate how many selected cuisine pills fit inside the
     * available width.
     */
    let usedWidth = 0;
    let visibleCount = 0;

    for (let index = 0; index < selectedCuisines.length; index++) {
        const cuisine = selectedCuisines[index];

        const pillWidth = pillWidths[cuisine.id];

        /*
         * We cannot calculate the final layout until the hidden
         * measurement pill has been rendered at least once.
         */
        if (pillWidth === undefined) {
            continue;
        }

        const gapBeforePill =
            visibleCount > 0
                ? pillGap
                : 0;

        const widthAfterAddingPill =
            usedWidth +
            gapBeforePill +
            pillWidth;

        const cuisinesRemaining =
            selectedCuisines.length - (index + 1);

        /*
         * If there are cuisines remaining after this one, reserve
         * enough space for the "+X more" pill as well.
         */
        const reservedMoreWidth =
            cuisinesRemaining > 0
                ? pillGap + moreCuisinesPillWidth
                : 0;

        if (
            widthAfterAddingPill + reservedMoreWidth >
            containerWidth
        ) {
            break;
        }

        usedWidth = widthAfterAddingPill;
        visibleCount++;
    }

    const visibleCuisines =
        selectedCuisines.slice(0, visibleCount);

    const hiddenCuisinesCount =
        selectedCuisines.length - visibleCount;


    return (
        <>
            {/*
                Main cuisine field.

                Shows the selected cuisines as pills and opens the
                cuisine selector modal when pressed.
            */}
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

                {/*
                    Invisible copies of the selected cuisine pills.

                    These are rendered only so React Native can tell us
                    their real widths using onLayout.
                */}
                <View
                    pointerEvents="none"
                    style={{
                        position: "absolute",
                        opacity: 0,
                    }}
                >
                    {selectedCuisines.map((cuisine) => (
                        <View
                            key={cuisine.id}
                            onLayout={(event) => {
                                const measuredWidth =
                                    event.nativeEvent.layout.width;

                                setPillWidths((current) => {
                                    /*
                                     * Avoid unnecessary state updates if
                                     * the measured width did not change.
                                     */
                                    if (
                                        current[cuisine.id] ===
                                        measuredWidth
                                    ) {
                                        return current;
                                    }

                                    return {
                                        ...current,
                                        [cuisine.id]: measuredWidth,
                                    };
                                });
                            }}
                            style={{
                                alignSelf: "flex-start",
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
                    ))}
                </View>


                {/*
                    Visible selected cuisine pills.
                */}
                <View
                    onLayout={(event) => {
                        setContainerWidth(
                            event.nativeEvent.layout.width
                        );
                    }}
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: pillGap,
                        flex: 1,
                        marginRight: 10,
                    }}
                >
                    {selectedCuisines.length === 0 ? (
                        <Text
                            style={{
                                color: "#888",
                                fontSize: 16
                            }}
                        >
                            Select cuisines
                        </Text>
                    ) : (
                        <>
                            {visibleCuisines.map((cuisine) => (
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
                                        numberOfLines={1}
                                        style={{
                                            fontSize: 14,
                                            color: "#3A3A3C",
                                        }}
                                    >
                                        {cuisine.name}
                                    </Text>
                                </View>
                            ))}

                            {hiddenCuisinesCount > 0 && (
                                <View
                                    style={{
                                        width: moreCuisinesPillWidth,
                                        backgroundColor: "#E5E5EA",
                                        borderRadius: 999,
                                        paddingVertical: 5,
                                        alignItems: "center",
                                    }}
                                >
                                    <Text
                                        numberOfLines={1}
                                        style={{
                                            fontSize: 14,
                                            color: "#3A3A3C",
                                        }}
                                    >
                                        +{hiddenCuisinesCount} more
                                    </Text>
                                </View>
                            )}
                        </>
                    )}
                </View>

                <Ionicons
                    name="chevron-forward"
                    size={20}
                    color="#8E8E93"
                />
            </Pressable>


            {/*
                Cuisine selection modal.
            */}
            <Modal
                visible={isOpen}
                animationType="slide"
                transparent
                onRequestClose={handleModalClose}
            >
                <KeyboardAvoidingView
                    style={{
                        flex: 1,
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        justifyContent: "flex-end",
                    }}
                    behavior={
                        Platform.OS === "ios"
                            ? "padding"
                            : "height"
                    }
                >
                    <View
                        style={{
                            backgroundColor: "#FFFFFF",
                            borderTopLeftRadius: 24,
                            borderTopRightRadius: 24,
                            padding: 20,
                            height: modalHeight,
                        }}
                    >

                        {/*
                            Search and cuisine list.
                        */}
                        <ScrollView
                            style={{ flex: 1 }}
                            keyboardShouldPersistTaps="always"
                            keyboardDismissMode="none"
                        >

                            {/*
                                Search field + Edit Mode button.
                            */}
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 10,
                                    marginBottom: 12,
                                }}
                            >
                                <FormTextInput
                                    placeholder="Search cuisine"
                                    value={searchText}
                                    onChangeText={onSearchTextChange}
                                    style={{
                                        flex: 1
                                    }}
                                />

                                <IconLabelButton
                                    iconName={
                                        isEditing
                                            ? "checkmark"
                                            : "create-outline"
                                    }
                                    color="#007AFF"
                                    onPress={() =>
                                        setIsEditing(
                                            current => !current
                                        )
                                    }
                                />
                            </View>


                            {/*
                                Draft cuisine row.

                                Only shown when:
                                - not editing
                                - text was entered
                                - no existing cuisine matches the search
                            */}
                            {!isEditing &&
                                normalizedSearch.length > 0 &&
                                filteredCuisines.length === 0 && (
                                    <View
                                        style={{
                                            minHeight: 48,
                                            marginVertical: 2,
                                            paddingHorizontal: 8,

                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-between",

                                            borderRadius: 8,
                                            backgroundColor: "#F2F2F7",
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 16
                                            }}
                                        >
                                            {searchText.trim()}
                                        </Text>

                                        <IconLabelButton
                                            iconName="save-outline"
                                            color="#007AFF"
                                            onPress={() =>
                                                onAddCuisine?.(
                                                    searchText.trim()
                                                )
                                            }
                                        />
                                    </View>
                                )}


                            {/*
                                Existing cuisines.
                            */}
                            {filteredCuisines.map((cuisine) => {
                                const isSelected =
                                    selectedCuisines.some(
                                        selectedCuisine =>
                                            selectedCuisine.id ===
                                            cuisine.id
                                    );

                                return (
                                    <Pressable
                                        key={cuisine.id}
                                        onPress={() => {
                                            /*
                                             * Rows cannot select/deselect
                                             * cuisines while Edit Mode is
                                             * active.
                                             */
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

                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-between",

                                            borderRadius: 8,

                                            backgroundColor:
                                                isSelected
                                                    ? "#F2F2F7"
                                                    : "transparent",
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 16
                                            }}
                                        >
                                            {cuisine.name}
                                        </Text>


                                        {/*
                                            Normal selection indicator.
                                        */}
                                        {!isEditing && isSelected && (
                                            <Ionicons
                                                name="checkmark"
                                                size={24}
                                                color="#007AFF"
                                            />
                                        )}


                                        {/*
                                            Edit/Delete controls.
                                        */}
                                        {isEditing && (
                                            <View
                                                style={{
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                    gap: 8,
                                                }}
                                            >
                                                <IconLabelButton
                                                    iconName="create-outline"
                                                    color="#007AFF"
                                                    onPress={() =>
                                                        onEditCuisine?.(
                                                            cuisine
                                                        )
                                                    }
                                                />

                                                <IconLabelButton
                                                    iconName="trash"
                                                    color="#FF3B30"
                                                    onPress={() =>
                                                        onDeleteCuisine?.(
                                                            cuisine
                                                        )
                                                    }
                                                />
                                            </View>
                                        )}
                                    </Pressable>
                                );
                            })}
                        </ScrollView>


                        {/*
                            Close modal.
                        */}
                        <IconLabelButton
                            label="Done"
                            iconName="checkmark"
                            color="#007AFF"
                            onPress={handleModalClose}
                        />
                    </View>
                </KeyboardAvoidingView>
            </Modal>
        </>
    );
}
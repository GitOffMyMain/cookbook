import {router} from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import {Pressable} from "react-native";

export default function BackButton() {
    return (
        <Pressable
            accessibilityLabel="Back"
            onPress={() => router.back()}
            style={{
                alignItems: "center",
                marginHorizontal: 20,
                marginBottom: 20,
                paddingVertical: 10,
                borderRadius: 999,
                borderWidth: 1,
                backgroundColor: "#e8e8e8"
            }}
        >
            <Ionicons name="chevron-back" size={20} />
        </Pressable>
    );
}
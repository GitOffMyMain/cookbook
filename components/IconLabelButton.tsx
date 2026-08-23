import {Pressable, Text} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import type { StyleProp, ViewStyle } from "react-native";

type IconLabelButtonProps = {
    label: string;
    iconName: keyof typeof Ionicons.glyphMap;
    color: string;
    style?: StyleProp<ViewStyle>;
    onPress: () => void;
}

export default function IconLabelButton({
    label,
    iconName,
    color,
    style,
    onPress
}: IconLabelButtonProps) {
    return (
        <Pressable
            onPress={onPress}
            style={[
                {
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2
                },
                style
            ]}
        >
            <Ionicons
                name={iconName}
                size={24}
                color={color}
            />
            <Text
                style={{
                    fontSize: 14,
                    color
                }}
            >
                {label}
            </Text>
        </Pressable>
    )
}
import {TextInput} from "react-native";
import type {KeyboardTypeOptions, StyleProp, TextStyle} from "react-native";

type FormTextInputProps = {
    keyboardType?: KeyboardTypeOptions;
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    style?: StyleProp<TextStyle>;
    hasError?: boolean;
}

export default function FormTextInput({
                        keyboardType,
                        placeholder,
                        value,
                        onChangeText,
                        style,
                        hasError
                    }: FormTextInputProps) {
    return (
        <TextInput
            keyboardType={keyboardType}
            placeholder={placeholder}
            placeholderTextColor={"#888"}
            value={value}
            onChangeText={onChangeText}
            style={[
                {
                    borderWidth: 1,
                    borderColor: hasError ? "#dc2626" : "#ccc",
                    borderRadius: 12,
                    fontSize: 16,
                    paddingHorizontal: 14,
                    paddingVertical: 12,
                },
                style
            ]}
        />
    )
}
import {Pressable, View} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

import type { SpiceLevelValue } from "@/types/SpiceLevel";

type SpiceLevelProps = {
    selectedLevel: SpiceLevelValue;
    iconSize?: number;
    onChange?: (level: SpiceLevelValue) => void;
}

export default function SpiceLevel( {selectedLevel, iconSize, onChange}: SpiceLevelProps ) {
    const possibleLevels: SpiceLevelValue[] = [1, 2, 3, 4, 5];

    return (
        <View style={{
            flexDirection: "row",
        }}>
            { possibleLevels.map((lvl) => (
                <Pressable
                    key={lvl}
                    onPress={ () => onChange?.(lvl) }
                >
                    <FontAwesome6
                        name="pepper-hot"
                        size={iconSize ?? 16}
                        color={(lvl <= selectedLevel) ? "red" : "gray"}
                    />
                </Pressable>
            )) }
        </View>
    )
}
import { View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

type SpiceLevelProps = {
    selectedLevel: 0 | 1 | 2 | 3 | 4 | 5;
}

export default function SpiceLevel( {selectedLevel}: SpiceLevelProps ) {
    const possibleLevels = [1, 2, 3, 4, 5];

    return (
        <View style={{
            flexDirection: "row",
        }}>
            { possibleLevels.map((lvl) => (
                <FontAwesome6 name="pepper-hot" size={16} color={(lvl <= selectedLevel) ? "red" : "gray"} key={lvl} />
            )) }
        </View>
    )
}
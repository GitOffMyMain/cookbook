import { Pressable, View, PanResponder } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { useRef } from "react";

import type { SpiceLevelValue } from "@/types/SpiceLevel";

type SpiceLevelProps = {
    selectedLevel: SpiceLevelValue;
    iconSize?: number;
    onPressLevel?: (level: SpiceLevelValue) => void;
    onDragLevel?: (level: SpiceLevelValue) => void;
}

export default function SpiceLevel( {selectedLevel, iconSize, onPressLevel, onDragLevel}: SpiceLevelProps ) {
    const possibleLevels: SpiceLevelValue[] = [1, 2, 3, 4, 5];
    const pepperRowRef = useRef<View>(null);
    const onDragLevelRef = useRef(onDragLevel);
    onDragLevelRef.current = onDragLevel;

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (_, gestureState) => {
                return (
                    onDragLevelRef.current !== undefined &&
                    Math.abs(gestureState.dx) > 10 &&
                    Math.abs(gestureState.dy) < 40
                );
            },
            onPanResponderMove(_, gestureState) {
               pepperRowRef.current?.measureInWindow((x, y, width) => {
                   const relativeX = gestureState.moveX - x;
                   const pepperWidth = width / 5;
                   const pepperLevel = Math.floor(relativeX / pepperWidth) + 1;
                   let currentLevel: SpiceLevelValue;

                   if (pepperLevel <= 0) {
                       currentLevel = 0;
                   } else if (pepperLevel > 5) {
                       currentLevel = 5;
                   } else {
                       currentLevel = pepperLevel as SpiceLevelValue;
                   }
                   onDragLevelRef.current?.(currentLevel);
               })
            }
        })
    ).current;

    return (
        <View
            { ...panResponder.panHandlers }
            ref={pepperRowRef}
            style={{
                flexDirection: "row",
            }}
        >
            { possibleLevels.map((lvl) => (
                <Pressable
                    key={lvl}
                    onPress={ () => onPressLevel?.(lvl) }
                >
                    <FontAwesome6
                        name="pepper-hot"
                        size={iconSize ?? 16}
                        color={(lvl <= selectedLevel) ? "red" : "gray"}
                    />

                    {/* Half red half gray pepper hot icon:
                    <View style={{ width: 24, height: 24 }}>
                        <FontAwesome6 name="pepper-hot" size={24} color="gray" />
                        <View style={{ position: 'absolute', top: 0, left: 0, width: 12, overflow: 'hidden' }}>
                            <FontAwesome6 name="pepper-hot" size={24} color="red" />
                        </View>
                    </View>
                    */}
                </Pressable>
            )) }
        </View>
    )
}
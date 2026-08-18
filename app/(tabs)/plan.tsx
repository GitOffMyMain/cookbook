import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PlanScreen() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <Text>Plan</Text>
            </View>
        </SafeAreaView>
    );
}
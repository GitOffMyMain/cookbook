import { View, Text } from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

export default function ShoppingScreen() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <Text>Shopping</Text>
            </View>
        </SafeAreaView>
    );
}
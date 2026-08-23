import { SafeAreaView } from "react-native-safe-area-context";
import type { ReactNode } from "react";

type CustomMenuBarProps = {
    children: ReactNode;
}

export default function CustomMenuBar({children}: CustomMenuBarProps) {

    return (
        <SafeAreaView
            edges={["bottom"]}
            style={{
                flexDirection: "row",
                borderTopWidth: 1,
                borderTopColor: "#d1d1d1",
                backgroundColor: "#fafafa",
                paddingTop: 10
            }}
        >
            {children}
        </SafeAreaView>
    )
}
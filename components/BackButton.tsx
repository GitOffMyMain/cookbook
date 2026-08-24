import CustomMenuBar from "@/components/CustomMenuBar";
import IconLabelButton from "@/components/IconLabelButton";
import {router} from "expo-router";

export default function BackButton() {
    return (
        <CustomMenuBar>
            <IconLabelButton
                label="Back"
                iconName="return-up-back"
                color="#8e8e93"
                onPress={() => router.back()}
                style={{ flex: 1 }}
            />
        </CustomMenuBar>
    );
}
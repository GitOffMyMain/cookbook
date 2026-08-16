import { SpiceLevelValue } from "@/types/SpiceLevel";

export type Recipe = {
    id: number;
    dishName: string;
    cuisine: string;
    spiceLevel: SpiceLevelValue;
    cookingTime: number;
};
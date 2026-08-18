import type { SpiceLevelValue } from "@/types/SpiceLevel";
import type { Cuisine } from "@/types/Cuisine";
import type { RecipeIngredient } from "@/types/RecipeIngredient";
import type { RecipeInstruction } from "@/types/RecipeInstruction";

export type Recipe = {
    id: number;
    dishName: string;
    cuisines: Cuisine[];
    spiceLevel: SpiceLevelValue;
    cookingTimeMinutes: number;
    ingredients: RecipeIngredient[];
    instructions: RecipeInstruction[];
    servings: number;
    imagePath: string;
    createdAt: Date;
    updatedAt: Date;
};
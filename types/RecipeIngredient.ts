import type { MeasuringUnits } from "@/types/MeasuringUnits";

export type RecipeIngredient = {
  id: number;
  recipeId: number;
  position: number;
  name: string;
  quantity?: number;
  unit?: MeasuringUnits;
}
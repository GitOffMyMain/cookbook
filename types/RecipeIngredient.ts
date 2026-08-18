export type RecipeIngredient = {
  id: number;
  recipeId: number;
  position: number;
  name: string;
  amount?: number;
  unit?: string;
}
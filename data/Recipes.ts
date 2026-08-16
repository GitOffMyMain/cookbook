import type {Recipe} from "@/types/Recipe";

export const recipes: Recipe[] = [
    {
        id: 1,
        dishName: "Coconut Chicken Rice",
        cuisine: "Ugandan",
        spiceLevel: 3,
        cookingTime: 45,
    },

    {
        id: 2,
        dishName: "Coconut chicken soup",
        cuisine: "Ugandan",
        spiceLevel: 0,
        cookingTime: 15,
    },

    {
        id: 3,
        dishName: "Udon",
        cuisine: "Asian",
        spiceLevel: 2,
        cookingTime: 20,
    }
];

export const cuisineOptions = new Set (
    recipes.map(recipe => recipe.cuisine)
);
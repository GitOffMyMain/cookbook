import type { Recipe } from "@/types/Recipe";


const fusionUgThai = [
    {
        id: 1,
        name: "Ugandan"
    },
    {
        id: 2,
        name: "Thai"
    },
    {
        id: 3,
        name: "Japanese"
    }
]

export const recipes: Recipe[] = [
    {
        id: 1,
        dishName: "Coconut Chicken Rice",
        cuisines: fusionUgThai,
        spiceLevel: 3,
        cookingTimeMinutes: 45,
        ingredients: [],
        instructions: [],
        servings: 1,
        imagePath: "",
        createdAt: new Date(),
        updatedAt: new Date(),
    },

    {
        id: 2,
        dishName: "Coconut chicken soup",
        cuisines: [{id: 2, name: "Thai"}],
        spiceLevel: 0,
        cookingTimeMinutes: 15,
        ingredients: [],
        instructions: [],
        servings: 1,
        imagePath: "",
        createdAt: new Date(),
        updatedAt: new Date(),
    },

    {
        id: 3,
        dishName: "Udon",
        cuisines: [{id: 3, name: "Japanese"}],
        spiceLevel: 2,
        cookingTimeMinutes: 90,
        ingredients: [],
        instructions: [],
        servings: 1,
        imagePath: "",
        createdAt: new Date(),
        updatedAt: new Date(),
    }
];

export const cuisineOptions = new Set (
    recipes.flatMap(
        recipe => recipe.cuisines.map(
            cuisine => cuisine.name
        )
    )
);
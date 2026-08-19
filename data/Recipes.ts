import type { Recipe } from "@/types/Recipe";


const fusionUgThai = [
    {
        id: 1,
        name: "Ugandan"
    },
    {
        id: 2,
        name: "Thai"
    }
]

export const recipes: Recipe[] = [
    {
        id: 1,
        dishName: "Coconut Chicken Rice",
        cuisines: fusionUgThai,
        spiceLevel: 3,
        cookingTimeMinutes: 45,
        ingredients: [
            {
                id: 1,
                recipeId: 1,
                position: 1,
                name: "long-grain rice",
                quantity: 360,
                unit: "g",
            },
            {
                id: 2,
                recipeId: 1,
                position: 2,
                name: "coconut milk",
                quantity: 250,
                unit: "ml",
            },
            {
                id: 3,
                recipeId: 1,
                position: 3,
                name: "hot water",
                quantity: 600,
                unit: "ml",
            },
            {
                id: 4,
                recipeId: 1,
                position: 4,
                name: "bouillon cube",
                quantity: 1,
                unit: "pc",
            },
            {
                id: 5,
                recipeId: 1,
                position: 5,
                name: "chicken breast, cut into bite-size cubes",
                quantity: 500,
                unit: "g",
            },
            {
                id: 6,
                recipeId: 1,
                position: 6,
                name: "frozen mixed vegetables",
                quantity: 300,
                unit: "g",
            },
            {
                id: 7,
                recipeId: 1,
                position: 7,
                name: "large onion, finely chopped",
                quantity: 1,
                unit: "pc",
            },
            {
                id: 8,
                recipeId: 1,
                position: 8,
                name: "garlic + ginger puree",
                quantity: 1.5,
                unit: "tbsp",
            },
            {
                id: 9,
                recipeId: 1,
                position: 9,
                name: "tomato paste",
                quantity: 1,
                unit: "tbsp",
            },
            {
                id: 10,
                recipeId: 1,
                position: 10,
                name: "gochujang",
                quantity: 1,
                unit: "tbsp",
            },
            {
                id: 11,
                recipeId: 1,
                position: 11,
                name: "curry powder",
                quantity: 1,
                unit: "tsp",
            },
            {
                id: 12,
                recipeId: 1,
                position: 12,
                name: "turmeric",
                quantity: 0.5,
                unit: "tsp",
            },
            {
                id: 13,
                recipeId: 1,
                position: 13,
                name: "ground cumin",
                quantity: 0.5,
                unit: "tsp",
            },
            {
                id: 14,
                recipeId: 1,
                position: 14,
                name: "ground coriander",
                quantity: 0.5,
                unit: "tsp",
            },
            {
                id: 15,
                recipeId: 1,
                position: 15,
                name: "paprika",
                quantity: 1,
                unit: "tsp",
            },
            {
                id: 16,
                recipeId: 1,
                position: 16,
                name: "black pepper",
                quantity: 0.5,
                unit: "tsp",
            },
            {
                id: 17,
                recipeId: 1,
                position: 17,
                name: "neutral cooking oil",
                quantity: 2,
                unit: "tbsp",
            },
            {
                id: 18,
                recipeId: 1,
                position: 18,
                name: "half of a lime",
            },
            {
                id: 19,
                recipeId: 1,
                position: 19,
                name: "fresh cilantro, optional",
            }
        ],
        instructions: [
            {
                id: 1,
                recipeId: 1,
                position: 1,
                details: "Rinse the rice under cold water until the water runs mostly clear. Dissolve the bouillon cube in the hot water. Finely chop the onion and cut the chicken breast into bite-size cubes.",
            },
            {
                id: 2,
                recipeId: 1,
                position: 2,
                details: "Heat the oil in a wide pot or deep pan over medium heat. Add the onion and cook for 4–5 minutes until soft and lightly golden.",
            },
            {
                id: 3,
                recipeId: 1,
                position: 3,
                details: "Add the garlic and ginger puree and cook for about 30 seconds. Add the tomato paste and cook for another minute until it becomes slightly darker.",
            },
            {
                id: 4,
                recipeId: 1,
                position: 4,
                details: "Add the curry powder, turmeric, cumin, coriander, paprika and black pepper. Stir for about 30 seconds to bloom the spices.",
            },
            {
                id: 5,
                recipeId: 1,
                position: 5,
                details: "Add the chicken and cook for 3–4 minutes, stirring occasionally, until the outside is white or lightly browned. It does not need to be fully cooked yet.",
            },
            {
                id: 6,
                recipeId: 1,
                position: 6,
                details: "Add the coconut milk, bouillon broth, gochujang and frozen vegetables. Stir well, bring to a gentle simmer and cook for 5–8 minutes.",
            },
            {
                id: 7,
                recipeId: 1,
                position: 7,
                details: "Taste the broth. It should taste slightly stronger, saltier and spicier than the finished dish because the rice will absorb and balance the flavors.",
            },
            {
                id: 8,
                recipeId: 1,
                position: 8,
                details: "Add the rinsed rice directly to the pot and stir once so that the rice is distributed evenly.",
            },
            {
                id: 9,
                recipeId: 1,
                position: 9,
                details: "Bring everything to a gentle boil. Once the surface is bubbling, reduce the heat to low, cover with a lid and cook for 15 minutes. Do not stir while the rice cooks.",
            },
            {
                id: 10,
                recipeId: 1,
                position: 10,
                details: "Turn off the heat and leave the lid on for another 10 minutes. This allows the rice to finish steaming.",
            },
            {
                id: 11,
                recipeId: 1,
                position: 11,
                details: "Remove the lid and gently fluff the rice. Add the lime juice and optional cilantro, then taste and adjust the seasoning if needed.",
            },
        ],
        servings: 4,
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
        servings: 4,
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
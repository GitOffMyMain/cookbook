import {View, Text, ScrollView, Pressable} from "react-native";
import {Image} from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

import RecipeMetadata from "@/components/RecipeMetadata";
import {recipes} from "@/data/Recipes";

export default function RecipeDetails() {
    const { id } = useLocalSearchParams();
    const recipe = recipes.find(recipe => recipe.id === Number(id));

    if (!recipe) {
        return <Text>Recipe not found</Text>;
    }

    return (
        <View
            style={{ flex: 1 }}
        >
            <Image
                source={require("@/assets/images/coconut_rice.jpg")}
                style={{width: "100%", height: 220}}
            />

            <View
                style={{
                    paddingHorizontal: 20,
                    paddingVertical: 20
            }}>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "bold",
                    }}>
                    {recipe.dishName}
                </Text>
                <RecipeMetadata
                    cuisine={recipe.cuisine}
                    spiceLevel={recipe.spiceLevel}
                    cookingTime={recipe.cookingTime}
                />
            </View>

            <ScrollView
                style={{
                    flex: 1,
                    marginBottom: 15
                }}
                contentContainerStyle={{
                    paddingHorizontal: 20,
            }}>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "bold",
                        marginBottom: 12
                    }}
                >
                    Ingredients
                </Text>

                <Text>
                    Rice
                    360 g long-grain rice (≈ 2 US cups)
                    250 ml coconut milk
                    600 ml hot water
                    1 bouillon cube
                    Protein
                    450–500 g chicken breast, cut into bite-size cubes
                    Vegetables
                    300 g frozen mixed vegetables

                    (no need to thaw)

                    Aromatics
                    1 large onion (≈180 g), finely chopped
                    1½ tablespoons garlic + ginger puree
                    Flavor Base
                    1 tablespoon tomato paste
                    1 tablespoon gochujang (use 2 if you want it very spicy)
                    Spices
                    1 teaspoon curry powder
                    ½ teaspoon turmeric
                    ½ teaspoon cumin
                    ½ teaspoon coriander powder
                    1 teaspoon paprika
                    ½ teaspoon black pepper

                    (do not add extra salt yet — bouillon + gochujang are salty)

                    Finish
                    Juice of ½ lime
                    Optional: fresh cilantro
                </Text>

                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "bold",
                        marginTop: 28,
                        marginBottom: 12
                }}>
                    Instructions
                </Text>

                <Text>
                    🔪 Step 1 — Prep
                    Rinse 360 g rice under cold water until water runs mostly clear.
                    Dissolve 1 bouillon cube in 600 ml hot water.
                    Chop onion.
                    Cut chicken into cubes.
                    🔥 Step 2 — Build the Flavor Base

                    Use a wide pot or deep pan.

                    Heat 2 tablespoons neutral oil over medium heat.

                    Add chopped onion and cook 4–5 minutes until soft and lightly golden.

                    Add garlic + ginger puree and cook 30 seconds.

                    Add tomato paste and cook 1 minute until darker red.

                    Add all the dry spices and stir 30 seconds to bloom the spices.

                    🍗 Step 3 — Cook the Chicken

                    Add cubed chicken.

                    Cook 3–4 minutes, stirring occasionally, until the outside turns white/lightly browned.

                    It does not need to be fully cooked yet.

                    🥥 Step 4 — Add Liquids

                    Add:

                    250 ml coconut milk
                    600 ml bouillon broth
                    1 tablespoon gochujang
                    300 g frozen vegetables

                    Stir well.

                    Bring to a gentle simmer and cook 5–8 minutes.

                    Taste the broth.

                    It should taste:

                    slightly strong
                    slightly salty
                    slightly spicy

                    The rice will absorb and balance it.

                    🍚 Step 5 — Add Rice

                    Add the rinsed rice directly into the pot.

                    Stir once so the rice spreads evenly.

                    🔥 Step 6 — Cook the Rice

                    Bring everything to a gentle boil.

                    Once bubbling across the surface:

                    Reduce heat to LOW
                    Cover with lid
                    Cook 15 minutes

                    Do not stir while it cooks.

                    ⏳ Step 7 — Steam Finish

                    After 15 minutes:

                    Turn off heat
                    Leave lid on
                    Let rest 10 minutes

                    This finishes steaming the rice.

                    🍽 Step 8 — Finish

                    Open lid and fluff rice gently with a spoon.

                    Add:

                    juice of ½ lime
                    optional cilantro

                    Taste and adjust salt if needed.
                </Text>
            </ScrollView>

            <Pressable
                accessibilityLabel="Back"
                onPress={() => router.back()}
                style={{
                    alignItems: "center",
                    marginHorizontal: 20,
                    marginBottom: 20,
                    paddingVertical: 10,
                    borderRadius: 999,
                    borderWidth: 1,
                    backgroundColor: "#e8e8e8"
                }}
            >
                <Ionicons name="chevron-back" size={20} />
            </Pressable>
        </View>
    )
}
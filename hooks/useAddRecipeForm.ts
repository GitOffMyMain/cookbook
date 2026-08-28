import { useState } from "react";

import type { SpiceLevelValue } from "@/types/SpiceLevel";

export default function useAddRecipeForm() {
    const [ recipeName, setRecipeName ] = useState("");
    const [ hours, setHours ] = useState("");
    const [ minutes, setMinutes ] = useState("");
    const [ submitted, setSubmitted ] = useState(false);
    const [ servings, setServings ] = useState("");
    const [ spiceLevel, setSpiceLevel ] = useState<SpiceLevelValue>(0);

    const parsedHours = hours === "" ? 0 : Number(hours);
    const parsedMinutes = minutes === "" ? 0 : Number(minutes);
    const parsedServings = Number(servings);

    const isRecipeNameValid = recipeName.trim().length > 0;
    const isHoursValid = Number.isInteger(parsedHours) && parsedHours >= 0;
    const isMinutesValid = Number.isInteger(parsedMinutes) && parsedMinutes >= 0;
    const isCookingTimeOverZero = parsedHours * 60 + parsedMinutes > 0;
    const isCookingTimeValid = isHoursValid && isMinutesValid && isCookingTimeOverZero;
    const isServingsValid = Number.isInteger(parsedServings) && parsedServings > 0;

    function handleSubmit() {
        setSubmitted(true);

        if (!isRecipeNameValid || !isCookingTimeValid || !isServingsValid) {
            return;
        }
    }

    function handleSpiceLevelChange(level: SpiceLevelValue) {
        if (level === spiceLevel) {
            setSpiceLevel(0);
            return;
        }

        setSpiceLevel(level);
    }

    return {
        recipeName,
        setRecipeName,
        hours,
        setHours,
        minutes,
        setMinutes,
        submitted,
        setSubmitted,
        servings,
        setServings,
        spiceLevel,
        setSpiceLevel,

        isRecipeNameValid,
        isHoursValid,
        isMinutesValid,
        isCookingTimeOverZero,
        isCookingTimeValid,
        isServingsValid,

        handleSubmit,
        handleSpiceLevelChange,
    }
}


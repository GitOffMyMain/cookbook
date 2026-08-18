export default function formatCookingTime(cookingTimeMinutes: number) {
    const hours = Math.floor(cookingTimeMinutes / 60);
    const minutes = cookingTimeMinutes % 60;

    if (hours === 0) {
        return `${minutes} min`;
    } else if (minutes === 0) {
        return `${hours} h`;
    }

    return `${hours} h ${minutes} min`;
}
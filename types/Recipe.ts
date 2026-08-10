export type Recipe = {
    dishName: string;
    cuisine: string;
    spiceLevel: 0 | 1 | 2 | 3 | 4 | 5;
    cookingTime: number;
};
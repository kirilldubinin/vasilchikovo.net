export interface  Task {
    id: number;
    type: string;
    name: string;
    dateTimeStart: Date;
    dateTimeEnd: Date;
    weight?: number;
    recipeId?: number;
}
export interface  Recipe {
    id: number;
    name: string;
    dateCreated: Date;
    dateUpdated?: Date;
    steam: {
        kgPerHour: number;
    },
    elements: {
        elementId: number;
        weight: number;
        stepIds: number[];
    }[];
}
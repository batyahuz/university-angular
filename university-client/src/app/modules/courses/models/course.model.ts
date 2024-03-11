export class Course {
    public id!: number;
    public name!: string;
    public categoryId!: number;
    public numberLessons!: number;
    public dateStart!: Date;
    public optionLearning!: learningOptions;
    public lectureId!: number;
    public cilibus!: string[];
    public image!: string;
}

export enum learningOptions { FRONTAL, ZOOM }
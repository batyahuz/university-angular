export class Course {
    public id!: number;
    public name!: string;
    public categoryId!: number;
    public numberLessons!: number;
    public dataStart!: Date;
    public optionLearning!: learningOptions;
    public lectureId!: number;
    public image!: string;
}

export enum learningOptions { FRONTAL, ZOOM }
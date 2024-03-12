export class Course {
    public id!: number;
    public name!: string;
    public categoryId!: number;
    public numberLessons!: number;
    public dateStart!: Date;
    public optionLearning!: learningOptions;
    public lecturerId!: number;
    public cilibus!: string[];
    public image!: string;

    constructor(course?: Course) {
        this.name = course?.name
        this.categoryId = course?.categoryId
        this.numberLessons = course?.numberLessons
        this.dateStart = course?.dateStart
        this.cilibus = course?.cilibus
        this.optionLearning = course?.optionLearning
        this.lecturerId = course?.lecturerId
        this.image = course?.image
    }
}

export enum learningOptions { FRONTAL, ZOOM }
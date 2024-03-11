import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Course, learningOptions } from "./models/course.model";
import { Observable } from "rxjs";
import { Category } from "./models/category.model";
import { Router } from "@angular/router";

@Injectable()
export class CoursesService {
    // private _courses: Course[] = [
    //     {
    //         id: 1, name: "C#", categoryId: 1, numberLessons: 50, dataStart: new Date("2024-02-02"),
    //         optionLearning: learningOptions.FRONTAL, lectureId: 1, image: ""
    //     },
    //     {
    //         id: 2, name: "Math", categoryId: 1, numberLessons: 50, dataStart: new Date("2024-02-01"),
    //         optionLearning: learningOptions.FRONTAL, lectureId: 1, image: ""
    //     }
    // ];

    // private _categories: Category[] = [

    //     { id: 1, name: "Camputers", icon: "" },
    //     { id: 2, name: "Math", icon: "" },
    //     { id: 3, name: "English", icon: "" },
    //     { id: 4, name: "Gym", icon: "" },
    //     { id: 5, name: "History", icon: "" }
    // ];

    private readonly _serviceName = "/university";

    navigateIfNotLoggedIn(): void {
        if (!localStorage.getItem('userToken'))
            this._router.navigate(['/']);
    }

    getCourses(): Promise<Course[]> {
        return new Promise((res, rej) => {
            this._http.get<Course[]>(this._serviceName + `/courses`)
                .subscribe({ next: (data) => res(data), error: (error) => rej(error) })
        })
    }

    getCourseById(id: number): Promise<Course> {
        return new Promise((res, rej) => {
            this._http.get<Course>(this._serviceName + `/courses/${id}`)
                .subscribe({ next: (data) => res(data), error: (error) => rej(error) })
        })
    }

    course: Course = new Course();

    login(user: { name: string }): Promise<any> {
        return new Promise((res, rej) => {
            this._http.post(this._serviceName + `/signin`, user)
                .subscribe({
                    next: (data: any) => {
                        console.log('suucceed');
                        res(data)
                    }, error: (error) => {
                        //TODO alert here error of service
                        rej(error)
                    }
                })
        })
    }

    addCourse(course: Course): Promise<Course> {
        console.log('in add course service', course);

        return new Promise((res, rej) => {
            this._http.post<Course>(this._serviceName + `/courses`, course)
                .subscribe({
                    next: (data) => {
                        console.log('succeeded');
                        res(data)
                    }, error: (error) => {
                        console.log('error');

                        rej(error)
                    }
                })
        })
    }

    editCouse(id: number, course: Course): Promise<Course> {
        return new Promise((res, rej) => {
            this._http.put<Course>(this._serviceName + `/courses${id}`, course)
                .subscribe({ next: (data) => res(data), error: (error) => rej(error) })
        })
    }

    deleteCourse(course: Course): Promise<Course> {
        return new Promise((res, rej) => {
            this._http.post<Course>(this._serviceName + `/courses`, course)
                .subscribe({ next: (data) => res(data), error: (error) => rej(error) })
        })
    }

    constructor(private _http: HttpClient, private _router: Router) { }
}
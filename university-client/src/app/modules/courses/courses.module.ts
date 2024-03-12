import { NgModule } from "@angular/core";
import { AllCoursesComponent } from "./all-courses/all-courses.component";
import { RouterModule } from "@angular/router";
import { courseRoutes } from "./courses.routes";
import { EditCourseComponent } from "./edit-course/edit-course.component";
import { AddCourseComponent } from "./add-course/add-course.component";
import { CourseDetailsComponent } from "./course-details/course-details.component";
import { HeaderInterceptor } from "./header.interceptor";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { LearningOptionIconPipe } from "./learning.option.icon.pipe";


@NgModule({
    imports: [HttpClientModule, CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(courseRoutes)],
    declarations: [AllCoursesComponent, EditCourseComponent, AddCourseComponent, CourseDetailsComponent, LearningOptionIconPipe],
    providers: [CoursesModule, { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }],
    exports: []
})
export class CoursesModule {

}
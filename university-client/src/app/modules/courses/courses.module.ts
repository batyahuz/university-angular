import { NgModule } from "@angular/core";
import { AllCoursesComponent } from "./all-courses/all-courses.component";
import { RouterModule } from "@angular/router";
import { courseRoutes } from "./courses.routes";
import { EditCourseComponent } from "./edit-course/edit-course.component";
import { AddCourseComponent } from "./add-course/add-course.component";
import { CourseDetailsComponent } from "./course-details/course-details.component";
import { HeaderInterceptor } from "./header.interceptor";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

@NgModule({
    imports: [HttpClientModule, RouterModule.forChild(courseRoutes)],
    declarations: [AllCoursesComponent, EditCourseComponent, AddCourseComponent, CourseDetailsComponent],
    providers: [CoursesModule, { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }],
    exports: [AllCoursesComponent]
})
export class CoursesModule {

}
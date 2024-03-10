import { NgModule } from "@angular/core";
import { AllCoursesComponent } from "./all-courses/all-courses.component";
import { RouterModule } from "@angular/router";
import { courseRoutes } from "./courses.routes";
import { EditCourseComponent } from "./edit-course/edit-course.component";
import { AddCourseComponent } from "./add-course/add-course.component";
import { CourseDetailsComponent } from "./course-details/course-details.component";

@NgModule({
    imports: [RouterModule.forChild(courseRoutes)],
    declarations: [AllCoursesComponent, EditCourseComponent, AddCourseComponent, CourseDetailsComponent],
    providers: [CoursesModule],
    exports: [AllCoursesComponent]
})
export class CoursesModule {

}
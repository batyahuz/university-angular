import { Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

export const courseRoutes: Routes = [
    { path: "all", component: AllCoursesComponent },
    { path: "add", component: AddCourseComponent },
    { path: "edit/:id", component: EditCourseComponent },
    { path: "details/:id", component: CourseDetailsComponent },
    // { path: "", component: HomePageComponent },
    // { path: "**", component: PageNotFoundComponent },
];

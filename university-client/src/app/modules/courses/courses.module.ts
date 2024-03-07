import { NgModule } from "@angular/core";
import { AllCoursesComponent } from "./all-courses/all-courses.component";

@NgModule({
    declarations: [AllCoursesComponent],
    providers: [CoursesModule],
    imports: [],
    exports: [AllCoursesComponent]
})
export class CoursesModule{

}
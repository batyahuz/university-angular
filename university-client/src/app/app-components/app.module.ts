import { NgModule } from "@angular/core";
import { AppComponent } from "./app/app.component";
import { BrowserModule } from "@angular/platform-browser";
import { CoursesModule } from "../modules/courses/courses.module";
import { RouterModule } from "@angular/router";
import { UsersModule } from "../modules/users/users.module";
import { appRoutes } from "./app.routes";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegisterComponent } from "../modules/users/register/register.component";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, UsersModule, CoursesModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, RegisterComponent],
    providers: [],
    bootstrap: [AppComponent],
    exports: [RouterModule, AppComponent]
})

export class AppModule {

}
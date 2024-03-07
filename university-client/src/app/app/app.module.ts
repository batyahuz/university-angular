import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { CoursesModule } from "../modules/courses/courses.module";
import { RouterModule } from "@angular/router";
import { UsersModule } from "../modules/users/users.module";
import { appRoutes } from "./app.routes";

@NgModule({
    imports: [BrowserModule, UsersModule, CoursesModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent],
    exports: [RouterModule, AppComponent]
})

export class AppModule {

}
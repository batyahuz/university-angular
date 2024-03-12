import { Routes } from '@angular/router';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';

export const appRoutes: Routes = [
    { path: "", pathMatch: 'full', component: HomePageComponent },
    { path: "user", loadChildren: () => import('../modules/users/users.module').then(m => m.UsersModule) },
    { path: "course", loadChildren: () => import('../modules/courses/courses.module').then(m => m.CoursesModule) },
    // { path: "*", component: PageNotFoundComponent }
];

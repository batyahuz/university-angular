import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from '../../app-components/page-not-found/page-not-found.component';

export const userRoutes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
];

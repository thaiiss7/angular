import { Routes } from '@angular/router';
import { LoginPage } from './features/login-page/login-page';
import { RegisterPage } from './features/register-page/register-page';
import { MainPage } from './features/main-page/main-page';

export const routes: Routes = [
    {path: "", component: LoginPage},
    {path: "register", component: RegisterPage},
    {path: "home", component: MainPage}
];

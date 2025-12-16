import { Routes } from '@angular/router';
import { authGuard } from './auth/auth-guard';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';

export const routes: Routes = [
    //sintassi di authGuard
    { path: 'home', component: Home,
        canActivate: [authGuard] },
        
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
];

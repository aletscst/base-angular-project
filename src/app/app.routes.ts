import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        title: 'Login',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'home',
        title: 'Home',
        canActivate: [authGuard],
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'profile',
        title: 'Profile',
        canActivate: [authGuard],
        loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent)
    },
    {
        path: 'settings',
        canActivate: [authGuard],
        children: [
            {
                path: '',
                title: 'Settings',
                loadComponent: () => import('./pages/settings/settings.component').then(m => m.SettingsComponent)
            },
            {
                path: 'general',
                title: 'General',
                loadComponent: () => import('./pages/settings/general/general.component').then(m => m.GeneralComponent)
            }
        ]
    }
];

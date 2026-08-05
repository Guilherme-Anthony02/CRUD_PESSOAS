import { Routes } from '@angular/router';

import { Cadastro } from './cadastro/cadastro';
import { HomeComponent } from './component/home-component/home-component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'cadastro',
        component: Cadastro
    }
];

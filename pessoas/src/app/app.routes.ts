import { Routes } from '@angular/router';

import { Cadastro } from './cadastro/cadastro';
import { Lista } from './lista/lista';
import { HomeComponent } from './home/component/component';

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
    },
    {
        path: 'cadastro/:id',
        component: Cadastro
    },
    {
        path: 'lista',
        component: Lista
    },
];

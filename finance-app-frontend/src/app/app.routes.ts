import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path :'',
        pathMatch : 'full',
        loadComponent : () =>{
            return import('./home/home.component').then((m)=>m.HomeComponent)
        }
    },

    {
        path : 'emi',
        loadComponent : () => {
            return import('./components/emi/emi.component').then((m) => m.EmiComponent)
        }
    },

    {
        path : 'investment',
        loadComponent : () => {
            return import('./components/investment/investment.component').then((m)=>m.InvestmentComponent)
        }
    }
];

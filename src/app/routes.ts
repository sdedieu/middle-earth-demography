import { Routes } from "@angular/router";
import { IsLoggedInGuard } from 'portal-shell';

export const routes: Routes = [
    { 
        path: '', 
        loadComponent: () => import('./character-statistics/character-statistics.component').then(m => m.CharacterStatisticsComponent),
        canActivate: [IsLoggedInGuard]
    }
]
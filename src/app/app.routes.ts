import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    loadComponent: () => import('./components/home/home.component').then(r => r.HomeComponent),
    pathMatch: 'full'
},
{
    path: 'survey/:id',
    loadComponent: () => import('./components/survey/survey.component').then(r => r.SurveyComponent)
},
{
    path: 'result',
    loadComponent: () => import('./components/result/result.component').then(r => r.ResultComponent)
},
{
    path: 'summary',
    loadComponent: () => import('./components/summary/summary.component').then(r => r.SummaryComponent)
}];

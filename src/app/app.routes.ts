import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [{
    path: '',
    component: HomeComponent,
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
}, {
    path: '**',
    component: HomeComponent,
}];

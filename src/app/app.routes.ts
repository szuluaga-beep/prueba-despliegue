import { Routes } from '@angular/router';
import { Portfolio } from './portfolio/portfolio';

export const routes: Routes = [
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: 'portfolio', component: Portfolio }
];

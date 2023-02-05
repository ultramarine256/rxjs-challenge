import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './pages.module';
import {
  Day01Component,
  Day02Component,
  Day03Component,
  HomePage,
  PagesComponent,
} from './index';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: HomePage,
      },
      {
        path: 'day-01',
        component: Day01Component,
      },
      {
        path: 'day-02',
        component: Day02Component,
      },
      {
        path: 'day-03',
        component: Day03Component,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

export const PagesRouting: ModuleWithProviders<PagesModule> =
  RouterModule.forChild(routes);

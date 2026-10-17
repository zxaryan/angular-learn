
import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        title: 'Home',
        loadComponent: () =>
          import('./features/pages/home/home').then(m => m.Home)
      },
      {
        path: 'about',
        title: 'About',
        loadComponent: () =>
          import('./features/pages/about/about').then(m => m.About)
      },
      {
        path: 'service',
        title: 'Services',
        loadComponent: () =>
          import('./features/pages/service/service').then(m => m.Service)
      },
      {
        path: 'contact',
        title: 'Contact',
        loadComponent: () =>
          import('./features/pages/contact/contact').then(m => m.Contact)
      }
    ]
  },
  {
    path: '**',  // WildCard route
    title: 'Page Not Found',
    loadComponent: () =>
      import('./features/pages/not-found/not-found').then(m => m.NotFound)
  }
];

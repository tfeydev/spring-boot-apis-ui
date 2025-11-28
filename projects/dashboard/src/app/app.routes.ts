import { Routes } from '@angular/router';
import { App } from 'projects/dashboard/src/app/app';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'App',
    pathMatch: 'full',
  },
  {
    path: 'books',
        loadChildren: () =>
          import('@spring-boot-apis-ui/books').then((m) => m.BooksRoutes),
  },
];

import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'foo',
    pathMatch: 'full'
  },
  {
    path: 'foo',
    loadComponent: () => import('./features/foo/foo.component').then(c => c.FooComponent)
  },
  {
    path: 'bar',
    loadComponent: () => import('./features/bar/bar.component').then(c => c.BarComponent)
  },
  {
    path: 'baz',
    loadComponent: () => import('./features/baz/baz.component').then(c => c.BazComponent)
  }
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'posts' },
  {
    path: 'posts',
    loadComponent: () =>
      import('./features/posts/posts.component').then(
        (mod) => mod.PostsComponent
      ),
  },
  { path: '**', redirectTo: 'posts' },
];

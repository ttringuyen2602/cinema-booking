import { Routes } from '@angular/router';
import { HomeComponent } from './pages/client/home/home.component';
import { MovieDetailsComponent } from './pages/client/movie-details/movie-details.component';
import { TestComponent } from "./pages/client/test/test.component";
import { ErrorComponent } from './pages/client/error.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'movie-details', component: MovieDetailsComponent },
  {path: 'test', component: TestComponent},
  { path: '**', component: ErrorComponent }
  // {
  //   path: 'movie-details',
  //   loadComponent: () =>
  //     import('./pages/client/movie-details/movie-details.component').then((c) => c.MovieDetailsComponent)
  // }
]

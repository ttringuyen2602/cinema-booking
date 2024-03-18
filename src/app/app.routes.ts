// import { Routes } from '@angular/router'
// import { AppComponent } from './app.component'

// export const routes: Routes = [
//   { path: '', component: AppComponent },
//   {
//     path: 'movie-details',
//     loadComponent: () =>
//       import('./pages/client/movie-details/movie-details.component').then((c) => c.MovieDetailsComponent)
//   }
// ]

import { Routes } from '@angular/router'
import { HomeComponent } from './pages/client/home/home.component'
import { MovieDetailsComponent } from './pages/client/movie-details/movie-details.component'
import { ErrorComponent } from './pages/client/error.component'

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movie-details', component: MovieDetailsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
]

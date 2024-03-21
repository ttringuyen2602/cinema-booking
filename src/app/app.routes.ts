import { Routes } from '@angular/router'
import { HomeComponent } from './pages/client/home/home.component'
import { MovieDetailsComponent } from './pages/client/movie-details/movie-details.component'
import { TestComponent } from './pages/client/test/test.component'
import { ErrorComponent } from './pages/client/error.component'
import { DashboardComponent } from '@src/app/pages/admin/dashboard/dashboard.component'
import { ShowtimesComponent } from '@src/app/pages/admin/showtimes/showtimes.component'
import { TicketComponent } from '@src/app/pages/admin/ticket/ticket.component'
import { FilmComponent } from '@src/app/pages/admin/film-group/film/film.component'

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  // { path: 'movie-details', component: MovieDetailsComponent },
  { path: 'admin/test', component: TestComponent },
  {
    path: 'admin',
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'film', component: FilmComponent },
      { path: 'showtimes', component: ShowtimesComponent },
      { path: 'ticket', component: TicketComponent },
      { path: '123', component: HomeComponent }
    ]
  },
  {
    path: 'movie-details',
    loadComponent: () =>
      import('./pages/client/movie-details/movie-details.component').then((c) => c.MovieDetailsComponent)
  },
  { path: '**', component: ErrorComponent }
]

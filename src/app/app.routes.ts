import { Routes } from '@angular/router'
import { HomeComponent } from './pages/client/home/home.component'
import { MovieDetailsComponent } from './pages/client/movie-details/movie-details.component'
import { TestComponent } from './pages/client/test/test.component'
import { ErrorComponent } from './pages/client/error.component'
import { SidebarMenuComponent } from '@src/app/pages/admin/components/sidebar-menu/sidebar-menu.component'
import { DashboardComponent } from '@src/app/pages/admin/dashboard/dashboard.component'

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  // { path: 'movie-details', component: MovieDetailsComponent },
  { path: 'admin/test', component: TestComponent },
  {
    path: 'admin',
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
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

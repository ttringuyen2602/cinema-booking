import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-showing-movie',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './showing-movie.component.html',
  styleUrl: './showing-movie.component.scss'
})
export class ShowingMovieComponent {}

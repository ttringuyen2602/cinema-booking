import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent {}

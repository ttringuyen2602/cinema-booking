import { Component } from '@angular/core'
import { NzButtonComponent } from 'ng-zorro-antd/button'
import { NzIconDirective } from 'ng-zorro-antd/icon'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzTableModule } from 'ng-zorro-antd/table'

interface Person {
  id: string
  name: string
  thumbnail: string
  type: string
  description: string
  duration: number
  date: string
}

@Component({
  selector: 'app-cinema',
  standalone: true,
  imports: [NzTableModule, NzInputModule, NzIconDirective, NzButtonComponent],
  templateUrl: './cinema.component.html',
  styleUrl: './cinema.component.scss'
})
export class CinemaComponent {
  listOfData: Person[] = [
    {
      id: '001',
      name: 'Những kẻ thao túng',
      thumbnail: 'https://cdn.galaxycine.vn/media/2024/3/15/750_1710489848913.jpg',
      type: 'Hoạt hình',
      description: 'Around the world in 80 days',
      duration: 82,
      date: '11-11-2022'
    },
    {
      id: '001',
      name: 'Những kẻ thao túng',
      thumbnail: 'https://cdn.galaxycine.vn/media/2024/3/15/750_1710489848913.jpg',
      type: 'Hoạt hình',
      description: 'Around the world in 80 days',
      duration: 82,
      date: '11-11-2022'
    },
    {
      id: '001',
      name: 'Những kẻ thao túng',
      thumbnail: 'https://cdn.galaxycine.vn/media/2024/3/15/750_1710489848913.jpg',
      type: 'Hoạt hình',
      description: 'Around the world in 80 days',
      duration: 82,
      date: '11-11-2022'
    }
  ]
}

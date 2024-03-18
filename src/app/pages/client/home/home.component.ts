import { Component } from '@angular/core'
import { CarouselState } from '@src/app/models/CarouselState'
import { NzCarouselModule } from 'ng-zorro-antd/carousel'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NzCarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  carousel = new CarouselState()
}

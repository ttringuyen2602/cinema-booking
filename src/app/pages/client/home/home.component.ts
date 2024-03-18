import { Component } from '@angular/core'
import { CarouselState } from '@src/app/models/CarouselState'
import { NzCarouselModule } from 'ng-zorro-antd/carousel'
import { HeaderComponent } from '@src/app/components/header/header.component'
import { FooterComponent } from '@src/app/components/footer/footer.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NzCarouselModule, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  carousel = new CarouselState()
}

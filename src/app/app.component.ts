import { Component } from '@angular/core'
import { NavigationStart, Router, RouterOutlet } from '@angular/router'
import { Location } from '@angular/common'
import { PATH } from '@src/app/constants/path-constant'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent {
  isAdmin = false

  constructor(private location2: Location,
              private router: Router
  ) {
    router.events.subscribe((event) => {
      // console.log(event)
      if (event instanceof NavigationStart) {
        if (location2.path().includes(PATH.admin)) {
          this.isAdmin = true
        }
      }
    })
  }
}

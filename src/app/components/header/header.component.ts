import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NzPopoverModule, NzAvatarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isAuthenticated = false
}

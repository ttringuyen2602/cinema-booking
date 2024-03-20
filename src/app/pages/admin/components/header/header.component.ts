import { Component, Input } from '@angular/core'
import { NzIconDirective } from 'ng-zorro-antd/icon'
import { NzHeaderComponent } from 'ng-zorro-antd/layout'

@Component({
  selector: 'app-header-admin',
  standalone: true,
  imports: [NzHeaderComponent, NzIconDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderAdminComponent {
  @Input() isCollapsed = false
}

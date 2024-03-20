import { Component, Input } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NzIconDirective } from 'ng-zorro-antd/icon'
import { NzSiderComponent } from 'ng-zorro-antd/layout'
import { NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent } from 'ng-zorro-antd/menu'

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [NzSiderComponent, NzMenuDirective, NzIconDirective, NzMenuItemComponent, NzSubMenuComponent, RouterLink],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss'
})
export class SidebarMenuComponent {
  @Input() isCollapsed = false
}

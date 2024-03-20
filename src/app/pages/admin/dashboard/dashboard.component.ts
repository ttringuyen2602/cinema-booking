import { Component } from '@angular/core'
import { NzBreadCrumbComponent, NzBreadCrumbItemComponent } from 'ng-zorro-antd/breadcrumb'
import { NzContentComponent, NzFooterComponent, NzHeaderComponent, NzLayoutComponent } from 'ng-zorro-antd/layout'
import { NzIconDirective } from 'ng-zorro-antd/icon'
import { RouterOutlet } from '@angular/router'
import { SidebarMenuComponent } from '../components/sidebar-menu/sidebar-menu.component'
import { HeaderAdminComponent } from '../components/header/header.component'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NzBreadCrumbComponent,
    NzBreadCrumbItemComponent,
    NzContentComponent,
    NzFooterComponent,
    NzHeaderComponent,
    NzIconDirective,
    NzLayoutComponent,
    RouterOutlet,
    SidebarMenuComponent,
    HeaderAdminComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
}

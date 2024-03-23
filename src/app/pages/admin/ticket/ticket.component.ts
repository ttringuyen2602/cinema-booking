import { Component, OnInit } from '@angular/core'
import { HeaderAdminComponent } from '@src/app/pages/admin/components/header/header.component'
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb'
import { NzButtonComponent } from 'ng-zorro-antd/button'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzInputDirective } from 'ng-zorro-antd/input'
import { NzTableModule } from 'ng-zorro-antd/table'
import { RouterModule } from '@angular/router'
import { SidebarMenuComponent } from '@src/app/pages/admin/components/sidebar-menu/sidebar-menu.component'
import { NzDividerComponent } from 'ng-zorro-antd/divider'
import { DataItem } from '@src/app/models/DataItem'
import { ColumnItem } from '@src/app/models/ColumnItem'

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [
    HeaderAdminComponent,
    NzBreadCrumbModule,
    NzLayoutModule,
    RouterModule,
    SidebarMenuComponent,
    NzButtonComponent,
    NzInputDirective,
    NzTableModule,
    NzDividerComponent
  ],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss'
})
export class TicketComponent implements OnInit {
  ngOnInit() {
  }

}


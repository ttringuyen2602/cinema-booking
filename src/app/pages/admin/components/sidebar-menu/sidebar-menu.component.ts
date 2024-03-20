import { Component, OnInit } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzMenuModule } from 'ng-zorro-antd/menu'
import { ToggleAdminMenuService } from '@src/app/services/toggle-admin-menu.service'
import { NzAffixComponent } from 'ng-zorro-antd/affix'
import { NzButtonModule } from 'ng-zorro-antd/button'

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    RouterModule,
    NzAffixComponent,
    NzButtonModule
  ],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss'
})
export class SidebarMenuComponent implements OnInit {
  isCollapsed = false

  constructor(private toggleAdminMenuService: ToggleAdminMenuService) {
  }

  ngOnInit(): void {
    this.toggleAdminMenuService.getCollapsedObservable().subscribe((data) => {
      this.isCollapsed = data
    })
  }
}

import { Component, OnInit } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzMenuModule } from 'ng-zorro-antd/menu'
import { AdminMenuService } from '@src/app/services/admin-menu.service'
import { NzAffixModule } from 'ng-zorro-antd/affix'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { SubMenuStateEnum, SubMenuState } from '@src/app/models/SubMenuState'

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    RouterModule,
    NzAffixModule,
    NzButtonModule
  ],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss'
})
export class SidebarMenuComponent implements OnInit {
  isCollapsed = false
  subMenuState: SubMenuState = {} as SubMenuState

  constructor(private adminMenuService: AdminMenuService) {
  }

  ngOnInit(): void {
    this.adminMenuService.getCollapsedObservable().subscribe((data) => {
      this.isCollapsed = data
    })

    this.subMenuState = this.adminMenuService.getSubMenuOpenStatus()
  }

  pushSubMenuOpenStatus(state: SubMenuStateEnum): void {
    this.adminMenuService.setSubMenuOpenStatus(state)
  }

  protected readonly SubMenuStateEnum = SubMenuStateEnum
}

import { Component, OnInit } from '@angular/core'
import { NzIconDirective } from 'ng-zorro-antd/icon'
import { NzHeaderComponent } from 'ng-zorro-antd/layout'
import { AdminMenuService } from '@src/app/services/admin-menu.service'


@Component({
  selector: 'app-header-admin',
  standalone: true,
  imports: [NzHeaderComponent, NzIconDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderAdminComponent implements OnInit {
  isCollapsed = false;

  constructor(private toggleAdminMenuService: AdminMenuService) {
  }

  ngOnInit(): void {
    this.toggleAdminMenuService.getCollapsedObservable().subscribe((data) => {
      this.isCollapsed = data;
    })
  }

  toggleMenu(): void {
    this.toggleAdminMenuService.toggleCollapsed();
  }
}

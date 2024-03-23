import { Component, OnInit } from '@angular/core'
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { RouterModule } from '@angular/router'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzTableModule, NzTableQueryParams } from 'ng-zorro-antd/table'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { HeaderAdminComponent } from '@src/app/pages/admin/components/header/header.component'
import { SidebarMenuComponent } from '@src/app/pages/admin/components/sidebar-menu/sidebar-menu.component'
import { ColumnItem } from '@src/app/models/ColumnItem'
import { DataItem } from '@src/app/models/DataItem'
import { FormsModule } from '@angular/forms'
import { NzColorDirective } from '@src/app/directives/nz-color.directive'
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzDropDownModule } from 'ng-zorro-antd/dropdown'
import { Film } from '@src/app/models/Film'
import { FilmColumnKeyEnum } from '@src/app/models/FilmColumnKeyEnum'
import { filmColumnList } from '@src/app/constants/FilmColumn'
import _ from 'lodash'

@Component({
  selector: 'app-showtimes',
  standalone: true,
  imports: [],
  templateUrl: './showtimes.component.html',
  styleUrl: './showtimes.component.scss'
})
export class ShowtimesComponent implements OnInit {
  ngOnInit() {
  }
}

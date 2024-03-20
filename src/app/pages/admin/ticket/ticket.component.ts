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
  listOfColumns: ColumnItem[] = [
    {
      name: 'STT',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      listOfFilter: [
        { text: 'Edward King 1', value: 'King 1' },
        { text: 'Jim', value: 'Jim' }
      ],
      filterFn: (list: string[], item: DataItem) => list.some(name => item.name.indexOf(name) !== -1)
    },
    {
      name: 'Loại Vé',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.age - b.age,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'Ngày Chiếu',
      sortFn: (a: DataItem, b: DataItem) => a.address > b.address ? 1 : 0,
      sortOrder: null,
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' }
      ],
      filterFn: (address: string, item: DataItem) => item.address.indexOf(address) !== -1
    },
    {
      name: 'Giờ Chiếu',
      sortFn: (a: DataItem, b: DataItem) => a.address > b.address ? 1 : 0,
      sortOrder: null,
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' }
      ],
      filterFn: (address: string, item: DataItem) => item.address.indexOf(address) !== -1
    },
    {
      name: 'Phòng',
      sortFn: (a: DataItem, b: DataItem) => a.address > b.address ? 1 : 0,
      sortOrder: null,
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' }
      ],
      filterFn: (address: string, item: DataItem) => item.address.indexOf(address) !== -1
    },
    {
      name: 'Số Ghế',
      sortFn: (a: DataItem, b: DataItem) => a.address > b.address ? 1 : 0,
      sortOrder: null,
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' }
      ],
      filterFn: (address: string, item: DataItem) => item.address.indexOf(address) !== -1
    },
    {
      name: 'Tổng Tiền Vé',
      sortFn: (a: DataItem, b: DataItem) => a.address > b.address ? 1 : 0,
      sortOrder: null,
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' }
      ],
      filterFn: (address: string, item: DataItem) => item.address.indexOf(address) !== -1
    }
  ]
  listOfData: DataItem[] = []

  trackByName(_: number, item: ColumnItem): string {
    return item.name
  }

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      this.listOfData.push({
        id: i,
        name: `Edward King ${i}`,
        age: i,
        address: `London, Park Lane no. ${i}`
      })
    }
  }

  onAllChecked(event: boolean) {

  }
}


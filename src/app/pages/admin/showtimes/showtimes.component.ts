import { Component, OnInit } from '@angular/core'
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { RouterModule } from '@angular/router'
import { NzButtonComponent } from 'ng-zorro-antd/button'
import { NzInputDirective } from 'ng-zorro-antd/input'
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzDividerComponent } from 'ng-zorro-antd/divider'
import { HeaderAdminComponent } from '@src/app/pages/admin/components/header/header.component'
import { SidebarMenuComponent } from '@src/app/pages/admin/components/sidebar-menu/sidebar-menu.component'
import { ColumnItem } from '@src/app/models/ColumnItem'
import { DataItem } from '@src/app/models/DataItem'

@Component({
  selector: 'app-showtimes',
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
  templateUrl: './showtimes.component.html',
  styleUrl: './showtimes.component.scss'
})
export class ShowtimesComponent implements OnInit {
  listOfColumns: ColumnItem[] = [
    {
      width: '',
      name: 'STT',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      listOfFilter: [
        { text: 'Edward King 1', value: 'King 1' },
        { text: 'Jim', value: 'Jim' }
      ],
      filterFn: (list: string[], item: DataItem) => list.some((name) => item.name.indexOf(name) !== -1)
    },
    {
      width: '',
      name: 'Tên Phim',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.age - b.age,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'Ngày Khởi Chiếu',
      width: '',
      sortFn: (a: DataItem, b: DataItem) => (a.address > b.address ? 1 : 0),
      sortOrder: null,
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' }
      ],
      filterFn: (address: string, item: DataItem) => item.address.indexOf(address) !== -1
    },
    {
      name: 'Giờ Bắt Đầu',
      width: '',
      sortFn: (a: DataItem, b: DataItem) => (a.address > b.address ? 1 : 0),
      sortOrder: null,
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' }
      ],
      filterFn: (address: string, item: DataItem) => item.address.indexOf(address) !== -1
    },
    {
      name: 'Phòng',
      width: '',
      sortFn: (a: DataItem, b: DataItem) => (a.address > b.address ? 1 : 0),
      sortOrder: null,
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' }
      ],
      filterFn: (address: string, item: DataItem) => item.address.indexOf(address) !== -1
    },
    {
      name: 'Phụ Phí',
      width: '',
      sortFn: (a: DataItem, b: DataItem) => (a.address > b.address ? 1 : 0),
      sortOrder: null,
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' }
      ],
      filterFn: (address: string, item: DataItem) => item.address.indexOf(address) !== -1
    },
    {
      name: 'Trạng Thái',
      width: '',
      sortFn: (a: DataItem, b: DataItem) => (a.address > b.address ? 1 : 0),
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

  onAllChecked(event: boolean) {}
}

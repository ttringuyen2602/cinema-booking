import { Component, OnInit } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { HeaderAdminComponent } from '@admin/components/header/header.component'
import { SidebarMenuComponent } from '@admin/components/sidebar-menu/sidebar-menu.component'
import { DataItem } from '@src/app/models/DataItem'
import { ColumnItem } from '@src/app/models/ColumnItem'
import { filmColumnList } from '@src/app/constants/FilmColumn'
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker'
import { Film } from '@src/app/models/Film'
import { HttpClient } from '@angular/common/http'
import { DOMAIN_LOCAL, FILM_URL } from '@src/app/constants/be-api'

@Component({
  selector: 'app-film',
  standalone: true,
  imports: [
    NzBreadCrumbModule,
    NzLayoutModule,
    RouterModule,
    NzButtonModule,
    NzInputModule,
    NzTableModule,
    NzDividerModule,
    NzDatePickerModule,
    NzSelectModule,
    HeaderAdminComponent,
    SidebarMenuComponent
  ],
  templateUrl: './film.component.html',
  styleUrl: './film.component.scss'
})
export class FilmComponent implements OnInit {

  filmList: Film[] = [];
  filmUnsavedList: Film[] = [];
  listOfColumns: ColumnItem[] = filmColumnList
  listOfData: DataItem[] = []
  adding = 0
  unsaved: number[] = []
  isTableCollapsed = false

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get<Film[]>(FILM_URL.getShowingFilmList).subscribe((data) => {
      this.filmList = data;
      console.log(data)
    });
  }

  trackByName(_: number, item: ColumnItem): string {
    return item.name
  }

  onAllChecked(event: boolean) {

  }

  addRow(): void {
    this.unsaved.push(1)
  }

  toggleCollapseTable(): void {
    this.isTableCollapsed = !this.isTableCollapsed
  }
}

import { ChangeDetectorRef, Component, OnInit } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzTableModule, NzTableQueryParams } from 'ng-zorro-antd/table'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { HeaderAdminComponent } from '@admin/components/header/header.component'
import { SidebarMenuComponent } from '@admin/components/sidebar-menu/sidebar-menu.component'
import { ColumnItem } from '@src/app/models/ColumnItem'
import { filmColumnList } from '@src/app/constants/FilmColumn'
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker'
import { Film } from '@src/app/models/Film'
import { HttpClient } from '@angular/common/http'
import { FILM_URL } from '@src/app/constants/be-api'
import { NzColorDirective } from '@src/app/directives/nz-color.directive'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzDropDownModule } from 'ng-zorro-antd/dropdown'
import { FormsModule } from '@angular/forms'
import { FilmColumnKeyEnum } from '@src/app/models/FilmColumnKeyEnum'
import _ from 'lodash'
import { FilmGenre } from '@src/app/models/FilmGenre'
import { DatePipe } from '@angular/common'
import { countries } from '@src/app/constants/countries'
import { BehaviorSubject, Subject } from 'rxjs'

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
    SidebarMenuComponent,
    NzColorDirective,
    NzIconModule,
    NzDropDownModule,
    FormsModule
  ],
  providers: [DatePipe],
  templateUrl: './film.component.html',
  styleUrl: './film.component.scss'
})
export class FilmComponent implements OnInit {

  filmList: Film[] = []
  filmListOriginal: Film[] = []
  filmUnsavedListCreate: Film[] = []
  filmUnsavedListUpdate: Film[] = []
  genreNameList: string[] = []
  isTableCollapsed = false
  tableLoading = false
  filmColumnList: ColumnItem[] = filmColumnList
  filmColumnValue = FilmColumnKeyEnum
  filmColumnSelectedSearch = ''
  searchValue = ''
  pageSize = -1
  countries = countries
  isCheckAll = false
  subject: Subject<any> = new BehaviorSubject(null)

  filmSample: Film[] = []

  constructor(private httpClient: HttpClient,
              private datePipe: DatePipe) {
  }

  ngOnInit() {
    for (let i = 0; i < 2; i++) {
      let a = new Film()
      a.filmId = i
      this.filmSample.push(a)
    }
    this.filmSample[0].filmName = 'hihi'
    this.filmSample[0].status = 'ACTIVE'

    this.filmList = this.filmListOriginal = this.filmSample
    this.getGenreList()
  }

  getGenreList(): void {
    const a = '123'
    this.genreNameList = [a]
    // this.httpClient.get<string[]>(FILM_URL.getGenreList)
    //   .subscribe((data) => {
    //     this.genreList = data
    //   })
  }

  getFilmList(event?: NzTableQueryParams): void {
    const params = {
      limit: 20,
      offset: 0
    }
    if (!_.isUndefined(event)) {
      params.limit = event.pageSize
      params.offset = event.pageSize * (event.pageIndex - 1)
    }
    this.tableLoading = true

    this.httpClient.get<Film[]>(FILM_URL.getShowingFilmList, { params })
      .subscribe({
        next: data => {
          this.filmList = data.map(x => ({ ...new Film(), ...x }))
          this.tableLoading = false
        }
      })
  }

  postFilmList(films: Film[]): void {
    this.httpClient.post<boolean>(FILM_URL.addFilmList, films)
      .subscribe(x => this.subject.next(x))
  }

  deleteFilmList(films: number[]): void {
    this.httpClient.delete(FILM_URL.deleteFilmList, { body: films })
      .subscribe(x => {
      })
  }

  searchByField(): void {
    if (_.isEmpty(this.filmColumnSelectedSearch)) return
    this.filmList =
      this.filmListOriginal.filter(x =>
        x[this.filmColumnSelectedSearch].toString().includes(this.searchValue)
      )
  }

  onCheck(all?: boolean): void {
    if (all) {
      this.filmList.forEach(x => x.isChecked = this.isCheckAll)
      this.isCheckAll = !this.isCheckAll
    }
    this.isCheckAll = this.filmList.every(x => x.isChecked)
  }

  onSelectPage(event: NzTableQueryParams): void {
    this.getFilmList(event)
  }

  assignFileToFilm({ target }: any, film: Film, aspectType: AspectType): void {
    if (_.isNull(target)) return
    const reader = new FileReader()
    reader.onload = function({ target }) {
      if (_.isNull(target) || _.isNull(target.result)) return
      switch (aspectType) {
        case 'portrait':
          film.portraitImage = target.result.toString()
          break
        case 'landscape':
          film.landscapeImage = target.result.toString()
          break
      }
    }
    reader.readAsDataURL(target.files[0])
  }

  addFilm(): void {
    this.filmUnsavedListCreate.push(new Film())
  }

  saveAddFilm(film: Film, idx: number, action: Action): void {
    switch (action) {
      case 'SAVE': {
        this.postFilmList([film])
        this.subject.subscribe(() => this.getFilmList()).unsubscribe()
        break
      }
      case 'CANCEL':
        break
    }
    _.remove(this.filmUnsavedListCreate, (_, i) => i === idx)
  }

  openEditMode(film: Film): void {
    film.isEditing = true
    this.filmUnsavedListUpdate.push(_.cloneDeep(film))
  }

  saveEditFilm(film: Film, action: Action): void {
    const idx = this.filmList.findIndex(x => x.filmId === film.filmId)

    switch (action) {
      case 'SAVE':
        film.isEditing = false
        break
      case 'CANCEL':
        this.filmUnsavedListUpdate.forEach(x => {
          if (film.filmId === x.filmId) {
            this.filmList[idx] = _.cloneDeep(x)
            this.filmList[idx].isEditing = false
            this.filmList = this.filmList.slice()
            console.log(this.filmList)
          }
        })
        break
    }
    _.remove(this.filmUnsavedListUpdate, x => x.filmId === film.filmId)
  }

  deleteFilm() {
    const filmIdList: number[] = []
    this.filmList.map((x, i, array) => {
      if (x.isChecked) {
        filmIdList.push(x.filmId)
        array.splice(i, 1)
      }
    })
    this.deleteFilmList(filmIdList)
  }

  toggleCollapseTable(): void {
    this.isTableCollapsed = !this.isTableCollapsed
  }

  trackByFilmId(_: number, item: Film): number {
    return item.filmId
  }
}

type Action = 'SAVE' | 'CANCEL'
type AspectType = 'portrait' | 'landscape'

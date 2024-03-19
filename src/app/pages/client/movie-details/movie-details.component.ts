import { Component, OnInit } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { NzTabsModule } from 'ng-zorro-antd/tabs'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzModalModule } from 'ng-zorro-antd/modal'
import { HeaderComponent } from '@src/app/components/header/header.component'
import { FooterComponent } from '@src/app/components/footer/footer.component'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    FormsModule,
    NzTabsModule,
    NzSelectModule,
    NzModalModule,
    HeaderComponent,
    FooterComponent,
    HttpClientModule
  ],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent implements OnInit {
  isToggleTrailer: boolean = false
  url: string = '/assets/data.json'
  dataExample: any
  selectedProvince = 'toanQuoc'
  listOfProvince = [
    { label: 'Hà Nội', value: 'haNoi' },
    { label: 'Hồ Chí Minh', value: 'hcm' },
    { label: 'Toàn quốc', value: 'toanQuoc' }
  ]

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    // this.httpClient.get(this.url)
    //   .subscribe(res => this.dataExample = res)
  }

  tabs = [
    {
      lichChieu: 'Hôm Nay 30/04',
      rap: 'N95 Quang Trung',
      phong: '2D Phụ đề',
      gioChieu: '17:00'
    },
    {
      lichChieu: 'Thứ Tư 01/05',
      rap: 'N95 Nguyễn Văn Quá',
      phong: '2D Phụ đề',
      gioChieu: '17:00'
    },
    {
      lichChieu: 'Thứ Năm 02/05',
      rap: 'N95 Lê Văn Việt',
      phong: '2D Phụ đề',
      gioChieu: '17:00'
    },
    {
      lichChieu: 'Thứ Sáu 03/05',
      rap: 'N95 Quy Nhơn',
      phong: '2D Phụ đề',
      gioChieu: '17:00'
    }
  ]

  showModalTrailer(): void {
    this.isToggleTrailer = true
  }

  handleCancel(): void {
    this.isToggleTrailer = false
  }
}

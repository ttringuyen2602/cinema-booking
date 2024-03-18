import { Component } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { NzTabsModule } from 'ng-zorro-antd/tabs'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzModalModule } from 'ng-zorro-antd/modal'

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NzTabsModule, NzSelectModule, NzModalModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent {
  isToggleTrailer: boolean = false
  // url: string = '/assets/data.json'
  // dataExample: any

  // constructor() {}

  // ngOnInit() {
  //   fetch(this.url)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       this.dataExample = json
  //     })
  // }

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

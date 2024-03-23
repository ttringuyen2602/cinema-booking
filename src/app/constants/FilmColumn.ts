import { Film } from '@src/app/models/Film'
import { ColumnItem, sortFn } from '@src/app/models/ColumnItem'
import _ from 'lodash'

export const filmColumnList: ColumnItem[] = [
  {
    name: 'Id',
    width: '80px',
    sortFn: (a: Film, b: Film) => sortFn(a.filmId, b.filmId)
  },
  {
    name: 'Tên Phim',
    width: '200px',
    sortFn: (a: Film, b: Film) => sortFn(a.filmName, b.filmName)
  },
  {
    name: 'Portrait Image',
    width: '200px',
    sortFn: null
  },
  {
    name: 'Landscape Image',
    width: '200px',
    sortFn: null
  },
  {
    name: 'Thể Loại',
    width: '180px',
    sortFn: null,
  },
  {
    name: 'Mô Tả',
    width: '200px',
    sortFn: (a: Film, b: Film) => sortFn(a.description, b.description)
  },
  {
    name: 'Thời Lượng',
    width: '100px',
    sortFn: (a: Film, b: Film) => sortFn(a.durationMinutes, b.durationMinutes)
  },
  {
    name: 'Ngày Khởi Chiếu',
    width: '160px',
    sortFn: (a: Film, b: Film) => sortFn(a.startDate.getDate(), b.startDate.getDate())
  },
  {
    name: 'Ngày Kết Thúc',
    width: '160px',
    sortFn: (a: Film, b: Film) => sortFn(a.endDate.getDate(), b.endDate.getDate())
  }, {
    name: 'Quốc Gia',
    width: '160px',
    sortFn: (a: Film, b: Film) => sortFn(a.country, b.country)
  },
  {
    name: 'Đạo Diễn',
    width: '160px',
    sortFn: (a: Film, b: Film) => sortFn(a.director, b.director)
  },
  {
    name: 'Diễn Viên',
    width: '240px',
    sortFn: (a: Film, b: Film) => sortFn(a.actor, b.actor)
  },
  {
    name: 'Trailer',
    width: '160px',
    sortFn: (a: Film, b: Film) => sortFn(a.trailer, b.trailer)
  },
  {
    name: 'Trạng Thái',
    width: '100px',
    sortFn: (a: Film, b: Film) => sortFn(a.status, b.status)
  },
  {
    name: 'Update',
    width: '100px',
    sortFn: null
  }
]

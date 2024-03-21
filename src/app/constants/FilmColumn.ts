import { DataItem } from '@src/app/models/DataItem'
import { ColumnItem } from '@src/app/models/ColumnItem'

export const filmColumnList: ColumnItem[] = [
  {
    name: 'STT',
    width: '80px',
    sortOrder: null,
    sortFn: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
    listOfFilter: [
      { text: 'Edward King 1', value: 'King 1' },
      { text: 'Jim', value: 'Jim' }
    ],
    filterFn: (list: string[], item: DataItem) => list.some(name => item.name.indexOf(name) !== -1)
  },
  {
    name: 'Tên Phim',
    width: '200px',
    sortOrder: null,
    sortFn: (a: DataItem, b: DataItem) => a.age - b.age,
    listOfFilter: [],
    filterFn: null
  },
  {
    name: 'Portrait Image',
    width: '200px',
    sortFn: (a: DataItem, b: DataItem) => a.address > b.address ? 1 : 0,
    sortOrder: null,
    listOfFilter: [
      { text: 'London', value: 'London' },
      { text: 'Sidney', value: 'Sidney' }
    ],
    filterFn: (address: string, item: DataItem) => item.address.indexOf(address) !== -1
  },
  {
    name: 'Landscape Image',
    width: '200px',
    sortFn: (a: DataItem, b: DataItem) => a.address > b.address ? 1 : 0,
    sortOrder: null,
    listOfFilter: [
      { text: 'London', value: 'London' },
      { text: 'Sidney', value: 'Sidney' }
    ],
    filterFn: (address: string, item: DataItem) => item.address.indexOf(address) !== -1
  },
  {
    name: 'Thể Loại',
    width: '140px',
    sortFn: (a: DataItem, b: DataItem) => a.address > b.address ? 1 : 0,
    sortOrder: null,
    listOfFilter: [
      { text: 'London', value: 'London' },
      { text: 'Sidney', value: 'Sidney' }
    ],
    filterFn: (address: string, item: DataItem) => item.address.indexOf(address) !== -1
  },
  {
    name: 'Mô Tả',
    width: '200px',
    sortFn: (a: DataItem, b: DataItem) => a.address > b.address ? 1 : 0,
    sortOrder: null,
    listOfFilter: [
      { text: 'London', value: 'London' },
      { text: 'Sidney', value: 'Sidney' }
    ],
    filterFn: (address: string, item: DataItem) => item.address.indexOf(address) !== -1
  },
  {
    name: 'Thời Lượng',
    width: '100px',
    sortFn: (a: DataItem, b: DataItem) => a.address > b.address ? 1 : 0,
    sortOrder: null,
    listOfFilter: [
      { text: 'London', value: 'London' },
      { text: 'Sidney', value: 'Sidney' }
    ],
    filterFn: (address: string, item: DataItem) => item.address.indexOf(address) !== -1
  },
  {
    name: 'Ngày Khởi Chiếu',
    width: '160px',
    sortFn: (a: DataItem, b: DataItem) => a.address > b.address ? 1 : 0,
    sortOrder: null,
    listOfFilter: [
      { text: 'London', value: 'London' },
      { text: 'Sidney', value: 'Sidney' }
    ],
    filterFn: (address: string, item: DataItem) => item.address.indexOf(address) !== -1
  },
  {
    name: 'Ngày Kết Thúc',
    width: '160px',
    sortFn: (a: DataItem, b: DataItem) => a.address > b.address ? 1 : 0,
    sortOrder: null,
    listOfFilter: [
      { text: 'London', value: 'London' },
      { text: 'Sidney', value: 'Sidney' }
    ],
    filterFn: (address: string, item: DataItem) => item.address.indexOf(address) !== -1
  }, {
    name: 'Quốc Gia',
    width: '160px',
    sortFn: (a: DataItem, b: DataItem) => a.address > b.address ? 1 : 0,
    sortOrder: null,
    listOfFilter: [
      { text: 'London', value: 'London' },
      { text: 'Sidney', value: 'Sidney' }
    ],
    filterFn: (address: string, item: DataItem) => item.address.indexOf(address) !== -1
  },
  {
    name: 'Đạo Diễn',
    width: '160px',
    sortFn: (a: DataItem, b: DataItem) => a.address > b.address ? 1 : 0,
    sortOrder: null,
    listOfFilter: [
      { text: 'London', value: 'London' },
      { text: 'Sidney', value: 'Sidney' }
    ],
    filterFn: (address: string, item: DataItem) => item.address.indexOf(address) !== -1
  },
  {
    name: 'Diễn Viên',
    width: '240px',
    sortFn: (a: DataItem, b: DataItem) => a.address > b.address ? 1 : 0,
    sortOrder: null,
    listOfFilter: [
      { text: 'London', value: 'London' },
      { text: 'Sidney', value: 'Sidney' }
    ],
    filterFn: (address: string, item: DataItem) => item.address.indexOf(address) !== -1
  },
  {
    name: 'Trailer',
    width: '160px',
    sortFn: (a: DataItem, b: DataItem) => a.address > b.address ? 1 : 0,
    sortOrder: null,
    listOfFilter: [
      { text: 'London', value: 'London' },
      { text: 'Sidney', value: 'Sidney' }
    ],
    filterFn: (address: string, item: DataItem) => item.address.indexOf(address) !== -1
  },
  {
    name: 'Trạng Thái',
    width: '100px',
    sortFn: (a: DataItem, b: DataItem) => a.address > b.address ? 1 : 0,
    sortOrder: null,
    listOfFilter: [
      { text: 'London', value: 'London' },
      { text: 'Sidney', value: 'Sidney' }
    ],
    filterFn: (address: string, item: DataItem) => item.address.indexOf(address) !== -1
  }
]

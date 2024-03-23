import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table'
import { DataItem } from '@src/app/models/DataItem'

export interface ColumnItem {
  name: string;
  width: string;
  sortFn: NzTableSortFn<any> | null;
}

export function sortFn(a: any, b: any) {
  if (a > b) return 1
  else if (a < b) return -1
  else return 0
}

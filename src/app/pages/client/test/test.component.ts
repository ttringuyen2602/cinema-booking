import { Component } from '@angular/core';

import {
  NzTableComponent,
  NzTableFilterFn,
  NzTableFilterList,
  NzTableSortFn,
  NzTableSortOrder, NzThAddOnComponent,
  NzTableModule
} from 'ng-zorro-antd/table'
import { RouterOutlet } from '@angular/router'
import { NgForOf } from '@angular/common'
import { NzOptionComponent, NzSelectComponent, NzSelectModule } from 'ng-zorro-antd/select'
import { FormsModule } from '@angular/forms'

interface DataItem {
  name: string;
  age: number;
  address: string;
}

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<DataItem> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<DataItem> | null;
  filterMultiple: boolean;
  sortDirections: NzTableSortOrder[];
}

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    NzTableModule,
    NzTableComponent,
    NzThAddOnComponent,
    RouterOutlet,
    NgForOf,
    NzSelectModule,
    FormsModule
  ],
  template: `
    <nz-select [(ngModel)]="inzz" nzShowSearch nzAllowClear nzPlaceHolder="Select a person" class="w-[200px]">
      <nz-option nzLabel="Jack" nzValue="jack"></nz-option>
      <nz-option nzLabel="Lucy" nzValue="lucy"></nz-option>
      <nz-option nzLabel="Tom" nzValue="tom"></nz-option>
    </nz-select>
  `
})
export class TestComponent {
  inzz = '';
}

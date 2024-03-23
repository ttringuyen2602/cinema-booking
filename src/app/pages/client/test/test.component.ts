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

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    RouterOutlet,
    NzSelectModule,
    FormsModule
  ],
  template: `
    <nz-select
      class="w-full"
      [nzMaxTagCount]="3"
      nzMode="multiple"
      nzPlaceHolder="Select genre"
      [(ngModel)]="test"
      (ngModelChange)="testzz()"
    >
        @for(z of abc; track $index) {
          <nz-option [nzLabel]="z" [nzValue]="z" />
        }
    </nz-select>
  `
})
export class TestComponent {
  test = [];
  abc = [1, 2, 3, 4, 5]
  testzz() {
    console.log(this.test)
    console.log(123123)
  }
}

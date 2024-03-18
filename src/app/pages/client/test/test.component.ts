import { Component } from '@angular/core';

import {
    NZ_CAROUSEL_CUSTOM_STRATEGIES, NzCarouselComponent, NzCarouselContentDirective,
    NzCarouselFlipStrategy,
    NzCarouselTransformNoLoopStrategy
} from "ng-zorro-antd/carousel";
import { FormsModule } from "@angular/forms";
import { NzRadioModule } from "ng-zorro-antd/radio";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'nz-demo-carousel-custom',
    standalone: true,
    imports: [FormsModule, NzRadioModule, NzCarouselComponent, RouterOutlet, NzCarouselContentDirective],
    template: `
    <nz-radio-group [(ngModel)]="strategy">
      <label nz-radio-button nzValue="fade">Fade (built-in)</label>
    </nz-radio-group>
        <nz-carousel class="carousel--animate" [nzEffect]="'fade'" nzTransitionSpeed="2000">
      @for (index of array; track index) {
        <div nz-carousel-content>
          <h3>{{ index }}</h3>
        </div>
      }
    </nz-carousel>
    <router-outlet></router-outlet>
    `,
    styles: [
        `
      nz-radio-group {
        margin-bottom: 8px;
      }

      [nz-carousel-content] {
        text-align: center;
        height: 160px;
        line-height: 160px;
        background: #364d79;
        color: #fff;
        overflow: hidden;
        transition: all 2.5s ease-out;
      }

      h3 {
        color: #fff;
        margin-bottom: 0;
        user-select: none;
      }

      .carousel--animate .slick-active {
          animation: zoomInOut 2.5s ease-out;
      }

      @keyframes zoomInOut {
          22% {
              transform: scale(1.02);
              opacity: 0;
          }

          100% {
              transform: scale(1);
              opacity: 1;
          }
      }
        `
    ],
    providers: [
        {
            provide: NZ_CAROUSEL_CUSTOM_STRATEGIES,
            useValue: [
                { name: 'transform-no-loop', strategy: NzCarouselTransformNoLoopStrategy },
                { name: 'flip', strategy: NzCarouselFlipStrategy }
            ]
        }
    ]
})
export class TestComponent {
    public strategy = 'transform-no-loop';
    public array = [1, 2, 3, 4];
}

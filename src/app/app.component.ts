import { AfterViewInit, Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { interval } from "rxjs";
import { CarouselState } from "@src/app/models/CarouselState";
import { NzCarouselModule } from "ng-zorro-antd/carousel";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [RouterOutlet, RouterLink, NzCarouselModule],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss"
})
export class AppComponent implements AfterViewInit {
    title = "cinema-booking-ui";
    carousel = new CarouselState();
    array = [1, 2, 3, 4];
    constructor() {
    }

    ngAfterViewInit(): void {
        interval(5000).subscribe(() => {
            this.nextCarousel();
        });
    }

    nextCarousel(): void {
        const currentTime = Date.now();
        if (currentTime - this.carousel.lastClickTime >= this.carousel.delayTime) {
            return;
        }
        this.carousel.id++;
        if (this.carousel.id >= this.carousel.img.length) {
            this.carousel.id = 0;
        }
    }

    previousCarousel(): void {
        const currentTime = Date.now();
        if (currentTime - this.carousel.lastClickTime >= this.carousel.delayTime) {
            return;
        }
        this.carousel.id--;
        if (this.carousel.id < 0) {
            this.carousel.id = this.carousel.img.length - 1;
        }
    }

}

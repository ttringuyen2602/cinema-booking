import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { SubMenuState, SubMenuStateEnum } from '@src/app/models/SubMenuState'
import { Location } from '@angular/common'
import { ActivationEnd, NavigationStart, Router } from '@angular/router'
import { PATH } from '@src/app/constants/path-constant'

@Injectable({
  providedIn: 'root'
})
export class AdminMenuService {

  private isCollapsed = false
  private subject = new BehaviorSubject(this.isCollapsed)
  private subMenuState: SubMenuState = {
    film: false,
    cinema: false
  }

  constructor(private location2: Location,
              private router: Router
  ) {
    this.initSubMenuState()
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed
    this.subject.next(this.isCollapsed)
  }

  getCollapsedObservable(): Observable<boolean> {
    return this.subject.asObservable()
  }

  initSubMenuState(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof ActivationEnd) {
        switch (this.location2.path()) {
          case PATH.adminFilm:
          case PATH.adminGenre:
            this.subMenuState.film = true
            break
          case PATH.adminCinema:
          case PATH.adminAuditorium:
            this.subMenuState.cinema = false
            break
        }
      }
    })
  }

  setSubMenuOpenStatus(state: SubMenuStateEnum): void {
    switch (state) {
      case SubMenuStateEnum.film:
        console.log(state)
        this.subMenuState.film = !this.subMenuState.film
        break
      case SubMenuStateEnum.cinema:
        this.subMenuState.cinema = !this.subMenuState.cinema
        break
    }
  }

  getSubMenuOpenStatus(): SubMenuState {
    return this.subMenuState
  }
}

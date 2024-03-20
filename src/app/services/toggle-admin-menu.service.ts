import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ToggleAdminMenuService {

  private isCollapsed = false
  private subject = new BehaviorSubject(this.isCollapsed)

  constructor() {
  }

  toggleCollapsed(): void {
    this.subject.next(this.isCollapsed = !this.isCollapsed);
  }

  getCollapsedObservable(): Observable<boolean> {
    return this.subject.asObservable();
  }
}

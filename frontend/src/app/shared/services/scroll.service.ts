import { ElementRef, inject, Injectable } from '@angular/core'
import { Route } from '../../../../types'
import { NavigationEnd, Router } from '@angular/router'

type Section = { route: Route; el: ElementRef<HTMLElement> }

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private sections: Map<Route, ElementRef<HTMLElement>> = new Map()
  private router = inject(Router)

  constructor() {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) return
      const route = event.url as Route
      this.scrollTo(route)
    })
  }

  public registerSection(sections: Section[]) {
    sections.forEach(({ route, el }) => {
      this.sections.set(route, el)
    })
  }

  public scrollTo(route: Route): void {
    // this.router.navigateByUrl(route)
    this.sections.get(route)?.nativeElement.scrollIntoView()
  }
}

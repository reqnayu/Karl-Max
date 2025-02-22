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

  private observer = new IntersectionObserver(
    (entries) => {
      const [section] = entries
        .filter(({ isIntersecting }) => isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
      // console.log(
      //   entries.map(({ target }) => target),
      //   section?.target,
      //   section?.isIntersecting
      // )
      // if (!entry.isIntersecting) return
      // const t = entry.target as HTMLElement
      // console.log(t, 'section !')
    },
    { threshold: [0.6] }
  )

  constructor() {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) return
      const route = event.url as Route
      this.scrollTo(route)
    })
  }

  public registerSection(sections: Section[]) {
    sections.forEach(({ route, el }) => {
      this.observer.observe(el.nativeElement)
      this.sections.set(route, el)
    })
  }

  public scrollTo(route: Route): void {
    // this.router.navigateByUrl(route)
    this.sections.get(route)?.nativeElement.scrollIntoView()
  }
}

import { ElementRef, HostListener, Injectable } from '@angular/core'
import { throttle } from '../directives/utilities'

@Injectable({
  providedIn: 'root',
})
export class ParallaxService {
  private observedElements: { el: HTMLElement; factor: number }[] = []

  public navBar?: ElementRef<HTMLElement>
  public navBarBackground?: ElementRef<HTMLElement>
  private lastScrollY = -1

  private parallaxObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const t = entry.target as HTMLElement
        t.dataset['parallax'] = `${entry.isIntersecting}`
      })
    },
    { threshold: [0, 1] }
  )

  constructor() {
    window.onscroll = throttle((e) => this.onScroll(e), 10)
  }

  ngAfterViewInit() {
    this.lastScrollY = window.scrollY
  }

  public observe(el: HTMLElement, factor: number): void {
    this.observedElements.push({ el, factor })
    this.parallaxObserver.observe(el)
  }

  private onScroll(e: Event) {
    this.parallaxHandler()
    this.navBarHandler()
  }

  private navBarHandler() {
    const currentScrollY = window.scrollY
    if (this.lastScrollY === -1) {
      this.lastScrollY = currentScrollY
    }
    const isScrollingDown = currentScrollY > this.lastScrollY
    ;[this.navBar, this.navBarBackground].forEach((el) => {
      el?.nativeElement.classList.toggle('hidden', isScrollingDown)
    })
    this.lastScrollY = currentScrollY
  }

  private parallaxHandler() {
    this.observedElements.forEach(({ el, factor }) => {
      if (el.dataset['parallax'] === 'false') return
      el.style.setProperty('--parallax', `${window.scrollY * factor}`)
    })
  }
}

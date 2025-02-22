import { Component, ElementRef, inject, ViewChild } from '@angular/core'
import { NavComponent } from './nav/nav.component'
import { AboutUsComponent } from './about-us/about-us.component'
import { FooterComponent } from './footer/footer.component'
import { DiscographyComponent } from './discography/discography.component'
import { LandingComponent } from './landing/landing.component'
import { IconComponent } from '../components/icon/icon.component'
import { ScrollService } from '../shared/services/scroll.service'
import { ContactComponent } from './contact/contact.component'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NavComponent,
    AboutUsComponent,
    FooterComponent,
    DiscographyComponent,
    LandingComponent,
    IconComponent,
    ContactComponent,
    RouterLink,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  private scroller = inject(ScrollService)

  @ViewChild('landing', { read: ElementRef<HTMLElement> }) landing!: ElementRef<HTMLElement>
  @ViewChild('aboutUs', { read: ElementRef<HTMLElement> }) aboutUs!: ElementRef<HTMLElement>
  @ViewChild('discography', { read: ElementRef<HTMLElement> }) discography!: ElementRef<HTMLElement>
  @ViewChild('contact', { read: ElementRef<HTMLElement> }) contact!: ElementRef<HTMLElement>

  ngAfterViewInit() {
    console.log(this.landing.nativeElement)
    this.scroller.registerSection([
      { route: '/start', el: this.landing },
      { route: '/die-band', el: this.aboutUs },
      { route: '/archiv', el: this.discography },
      { route: '/kontakt', el: this.contact },
    ])
  }
}
